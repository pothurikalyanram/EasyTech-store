const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

const filesToCopy = [
    'index.html',
    'builder.html',
    'blog.html',
    'super-admin-master.html',
    'super-admin-login.html',
    'disclosure.html',
    'privacy.html',
    'terms.html',
    'app.js',
    'builder.js',
    'super-admin.js',
    'auto-refresh.js',
    'styles.css',
    'robots.txt',
    'sitemap.xml',
    '_headers',
    '_redirects'
];

filesToCopy.forEach(file => {
    const src = path.join(__dirname, file);
    const dest = path.join(distDir, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
    }
});

console.log('✅ Build completed: All static files copied to dist/');
