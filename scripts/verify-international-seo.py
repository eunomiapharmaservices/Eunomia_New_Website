"""Verify rendered language, canonical social tags and reciprocal alternates.
Usage: python scripts/verify-international-seo.py http://127.0.0.1:3094
"""
import concurrent.futures
from html.parser import HTMLParser
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

base = sys.argv[1].rstrip('/')
site = 'https://www.eunomiapharmaservices.com'
languages = {'es', 'fr', 'de', 'it', 'pt', 'nl', 'ja', 'zh-CN', 'ar'}

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.lang = self.direction = self.canonical = None
        self.meta = {}
        self.alternates = {}
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'html':
            self.lang, self.direction = attrs.get('lang'), attrs.get('dir')
        if tag == 'meta':
            self.meta[attrs.get('property', attrs.get('name'))] = attrs.get('content')
        if tag == 'link':
            if attrs.get('rel') == 'canonical': self.canonical = attrs.get('href')
            if attrs.get('hreflang'): self.alternates[attrs['hreflang']] = attrs['href']

def fetch(url):
    with urllib.request.urlopen(url, timeout=45) as response:
        return response.read()

root = ET.fromstring(fetch(base + '/sitemap.xml'))
urls = [entry.text for entry in root.findall('{*}url/{*}loc')]
assert len(urls) == len(set(urls)), 'Duplicate sitemap URLs'

def check(url):
    path = urllib.parse.urlsplit(url).path or '/'
    page = Page()
    page.feed(fetch(base + path).decode())
    language = path.split('/')[1]
    expected = language if language in languages else 'en'
    assert page.lang == expected, (url, 'HTML language', page.lang)
    assert page.direction == ('rtl' if expected == 'ar' else 'ltr'), (url, 'direction')
    assert page.meta.get('og:title'), (url, 'missing OG title')
    assert page.meta.get('og:description'), (url, 'missing OG description')
    assert page.meta.get('og:image'), (url, 'missing OG image')
    assert page.meta.get('twitter:card') == 'summary_large_image', (url, 'missing social card')
    assert page.meta.get('og:url', '').rstrip('/') == page.canonical.rstrip('/'), (url, 'social/canonical mismatch')
    return url.rstrip('/'), page

pages = dict(concurrent.futures.ThreadPoolExecutor(max_workers=12).map(check, urls))
for url, page in pages.items():
    for target in page.alternates.values():
        if target.rstrip('/') in pages:
            assert url in {link.rstrip('/') for link in pages[target.rstrip('/')].alternates.values()}, (url, 'missing return link', target)
print(f'PASS: {len(pages)} sitemap pages; language, direction, social tags and reciprocal links')
