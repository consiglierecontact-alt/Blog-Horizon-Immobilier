import re, json

with open('yt_page.html', 'rb') as f:
    raw = f.read()
print('BYTES', len(raw))

text = raw.decode('utf-8', errors='ignore')
print('TEXTLEN', len(text))

# Search for videoId occurrences
vids = re.findall(r'"videoId"\s*:\s*"([\w-]{6,})"', text)
print('NB_VIDEOIDS', len(vids))
print('FIRST_VIDS', vids[:15])

# Search for title patterns (video titles)
titles = re.findall(r'"title"\s*:\s*"([^"]{5,200})"', text)
print('NB_TITLES', len(titles))
for t in titles[:30]:
    print('TITLE>', t)

# Channel description / name
m = re.search(r'"channelMetadataRoot"[^}]*?"title"\s*:\s*"([^"]+)"', text)
print('CHANNEL_TITLE', m.group(1) if m else 'NA')
m2 = re.search(r'"description"\s*:\s*"([^"]{5,500})"', text)
print('CHANNEL_DESC', m2.group(1)[:300] if m2 else 'NA')

# Save findings
with open('extracted.txt', 'w', encoding='utf-8') as o:
    o.write('VIDEOIDS:\n')
    o.write('\n'.join(vids))
    o.write('\n\nTITLES:\n')
    o.write('\n'.join(titles))
