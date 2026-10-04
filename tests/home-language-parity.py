"""Check actual rendered homepage parity against a running production build."""
import json, os, urllib.request
from pathlib import Path
from bs4 import BeautifulSoup
base = os.environ.get('SITE_URL', 'http://localhost:3025')
locales = ['en','es','fr','de','it','pt','nl','ja','zh-CN','ar']
reference = None
for locale in locales:
    url = base + ('/' if locale == 'en' else '/'+locale)
    soup = BeautifulSoup(urllib.request.urlopen(url).read(), 'html.parser')
    main = soup.find('main')
    assert main and main.get('lang') == locale, (locale, 'page language')
    assert main.get('dir') == ('rtl' if locale == 'ar' else 'ltr'), (locale, 'direction')
    sections = [(s.get('id'),s.get('class'),s.get('aria-labelledby')) for s in main.find_all('section')]
    images = [(i.get('src'),i.get('width'),i.get('height')) for i in main.find_all('img')]
    outline = [h.name for h in main.find_all(['h1','h2','h3'])]
    assert len(main.select('.partner-dot')) == 12, (locale, 'map markers')
    assert len(main.select('.client-logo-group')) == 2, (locale, 'logos')
    assert main.select('.client-logo-group')[1].get('aria-hidden') == 'true'
    assert len(main.select('.review-grid blockquote')) == 3, (locale, 'reviews')
    assert len(main.select('.home-service-summary-row li')) == 4, (locale, 'services')
    assert len(main.select('.start-card')) == 4, (locale, 'audience cards')
    assert len(main.select('.home-market-links a')) == 8, (locale, 'markets')
    assert len(main.select('.faq-list details')) == 6, (locale, 'FAQs')
    for marker in main.select('.partner-dot'):
        assert marker['href'].startswith(('' if locale=='en' else '/'+locale)+'/team#')
    schema = [json.loads(s.string) for s in main.select('script[type="application/ld+json"]')]
    faq = next(s for s in schema if s.get('@type')=='FAQPage')
    rendered = [(d.summary.get_text(),d.p.get_text()) for d in main.select('.faq-list details')]
    assert rendered == [(q['name'],q['acceptedAnswer']['text']) for q in faq['mainEntity']], (locale, 'FAQ schema')
    shape = (sections,images,outline)
    if reference is None: reference=shape
    else: assert shape == reference, (locale, 'structure or imagery differs')
    source = json.loads(Path('data/i18n/home.en.json').read_text())
    translated = json.loads(Path('data/i18n/home.'+locale+'.json').read_text())
    assert len(source)==len(translated)==133
    assert all(isinstance(s,str) and s.strip() for s in translated)
    if locale!='en':
        visible=main.get_text(' ',strip=True)
        for i in [7,30,33,35,71,72,78,82,84,88,90,91,113,115,117,119,121,123]:
            assert translated[i] in visible,(locale,'missing full passage',i)
            assert source[i] not in visible,(locale,'untranslated passage',i)
    print(locale, 'PASS', len(sections), 'sections,', len(images), 'images, 12 markers, 6 FAQs')
