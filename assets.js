import fs from 'fs';

const indexHtml = fs.readFileSync('build/index.html', {
  encoding: 'utf-8',
});

const extract = (pattern, string) => {
  const matches = [];
  const re = new RegExp(pattern, 'g');
  let match = re.exec(string);
  while (match !== null) {
    matches.push(match[1]);
    match = re.exec(string);
  }
  return matches;
};

export default {
  css: extract('<link href="(.+?)" rel="stylesheet">', indexHtml),
  js: extract(
    '<script src="(.+?)"></script>',
    indexHtml,
  ),
};
