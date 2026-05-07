const fs = require('fs');

try {
  const html = fs.readFileSync('../docs/gw-lang.html', 'utf8');

  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  if (styleMatch) {
      fs.writeFileSync('./style.css', styleMatch[1]);
  }

  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  if (scriptMatch) {
      fs.writeFileSync('./main.js', scriptMatch[1]);
  }

  let newHtml = html.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="/style.css">');
  newHtml = newHtml.replace(/<script>[\s\S]*?<\/script>/, '<script type="module" src="/main.js"></script>');

  fs.writeFileSync('./index.html', newHtml);
  console.log("Successfully extracted assets.");
} catch (e) {
  console.error(e);
}
