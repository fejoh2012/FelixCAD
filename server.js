import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (pathname === '/ollama/api/tags' || pathname === '/ollama/api/chat') {
    if ((pathname.endsWith('/tags') && req.method !== 'GET') || (pathname.endsWith('/chat') && req.method !== 'POST')) { res.writeHead(405).end('Method not allowed'); return; }
    const upstream = http.request({ hostname: '127.0.0.1', port: 11434, path: pathname.replace('/ollama', ''), method: req.method, headers: { 'content-type': req.headers['content-type'] || 'application/json' }, timeout: 300000 }, response => {
      res.writeHead(response.statusCode || 502, { 'Content-Type': response.headers['content-type'] || 'application/json' });
      response.pipe(res);
    });
    upstream.on('timeout', () => upstream.destroy(new Error('Ollama request timed out')));
    upstream.on('error', error => { if (!res.headersSent) res.writeHead(502, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: `Cannot reach Ollama at 127.0.0.1:11434: ${error.message}` })); });
    req.pipe(upstream);
    return;
  }
  const filename = path.join(root, pathname === '/' ? 'index.html' : pathname);
  if (!filename.startsWith(root + path.sep) && filename !== path.join(root, 'index.html')) { res.writeHead(403).end(); return; }
  fs.readFile(filename, (err, data) => {
    if (err) { res.writeHead(404).end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(Number(process.env.PORT) || 4174, '127.0.0.1', () => console.log(`FelixCad running at http://localhost:${Number(process.env.PORT) || 4174}`));
