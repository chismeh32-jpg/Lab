import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=import.meta.dirname;
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const file=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!file.startsWith(root+path.sep))throw Error();const data=await readFile(file);res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript'})[path.extname(file)]||'application/octet-stream');res.end(data)}catch{res.writeHead(404);res.end('No encontrado')}}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('PALABRA en puerto '+(process.env.PORT||3000)));
