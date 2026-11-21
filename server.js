import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const filename = path.join(root, pathname === '/' ? 'index.html' : pathname);
  if (!filename.startsWith(root + path.sep) && filename !== path.join(root, 'index.html')) { res.writeHead(403).end(); return; }
  fs.readFile(filename, (err, data) => {
    if (err) { res.writeHead(404).end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(4174, '127.0.0.1', () => console.log('FelixCad running at http://localhost:4174'));
