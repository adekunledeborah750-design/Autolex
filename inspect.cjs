const fs = require('fs');
const html = fs.readFileSync('original_home.html', 'utf8');
const match = html.match(/<a aria-label="[^"]*home"[\s\S]*?<\/a>/);
if (match) {
  console.log('LOGO MATCH:');
  console.log(match[0]);
} else {
  console.log('Not found');
}
