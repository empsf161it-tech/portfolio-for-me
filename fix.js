const fs = require('fs');
let content = fs.readFileSync('blog.html', 'utf8');

// 1. Add flex flex-col to <article class="... card group ...">
content = content.replace(/<article class="([^"]*card group[^"]*hover:border-accent)"/g, '<article class="$1 flex flex-col"');

// 2. Change <div class="p-6"> to <div class="p-6 flex flex-col grow">
content = content.replace(/<div class="p-6">/g, '<div class="p-6 flex flex-col grow">');

// 3. Add mt-auto to Read more -> links
content = content.replace(/<a href="blog-article.html" class="inline-flex/g, '<a href="blog-article.html" class="mt-auto inline-flex');

fs.writeFileSync('blog.html', content);
console.log('Fixed blog.html');
