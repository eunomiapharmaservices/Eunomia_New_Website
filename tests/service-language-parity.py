"""Compare rendered service structures, translated text and structured data."""
import json, os, urllib.request
from bs4 import BeautifulSoup
from pathlib import Path
base=os.environ.get('SITE_URL','http://127.0.0.1:3026')
locales=['en','es','fr','de','it','pt','nl','ja','zh-CN','ar']
slugs=['governance-assurance','automation-of-compliance-operations','local-legal-mandates','shared-services']
for slug in slugs:
 reference=None
 for locale in locales:
  path=('' if locale=='en' else '/'+locale)+'/services/'+slug
  soup=BeautifulSoup(urllib.request.urlopen(base+path).read(),'html.parser');main=soup.main
  schema=[json.loads(s.string) for s in main.select('script[type="application/ld+json"]')]
  faq=next(s for s in schema if s.get('@type')=='FAQPage')
  rendered=[(d.summary.get_text(),d.p.get_text()) for d in main.select('.faq-list details')]
  assert rendered==[(q['name'],q['acceptedAnswer']['text']) for q in faq['mainEntity']],(locale,slug,'FAQ schema')
  service=next(s for s in schema if s.get('@type')=='Service')
  assert service['url'].endswith(path)
  sections=[(s.get('id'),s.get('class'),s.get('aria-labelledby')) for s in main.find_all('section')]
  images=[(i.get('src'),i.get('width'),i.get('height')) for i in main.find_all('img')]
  headings=[h.name for h in main.find_all(['h1','h2','h3'])]
  shape=(sections,images,headings,len(rendered))
  if reference is None:reference=shape
  else:assert shape==reference,(locale,slug,'structure mismatch')
  if locale!='en':
   assert main['lang']==locale
   assert main.get('dir')==('rtl' if locale=='ar' else None)
   assert main.select_one('.back-link')['href']=='/'+locale+'/services'
   for a in main.select('.partner-dot'):assert a['href'].startswith('/'+locale+'/team#')
   visible=main.get_text(' ',strip=True)
   source=json.loads(Path('data/i18n/services-full.en.json').read_text())
   translated=json.loads(Path('data/i18n/services-full.'+locale+'.json').read_text())
   for i in {'governance-assurance':[6,23,25,27,29,31,33], 'automation-of-compliance-operations':[38,56,58,60,81,83,85,87,89,91,93], 'local-legal-mandates':[98,110,127,129,131,133,135,137,139,141,143,145,147,149,151], 'shared-services':[156,167,169,171,173,175,177]}[slug]:
    assert translated[i] in visible,(locale,slug,'missing passage',i)
    assert source[i] not in visible,(locale,slug,'English passage',i)
  print(locale,slug,'PASS',len(sections),'sections',len(rendered),'FAQs')
