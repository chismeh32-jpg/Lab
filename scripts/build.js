import {mkdir,readFile,writeFile,copyFile,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist/src',{recursive:true});
const html=(await readFile('index.html','utf8')).replaceAll('href="/src/','href="./src/').replaceAll('src="/src/','src="./src/').replaceAll('href="/"','href="./"');
await writeFile('dist/index.html',html);
for(const file of ['app.js','engine.js','style.css'])await copyFile('src/'+file,'dist/src/'+file);
await writeFile('dist/.nojekyll','');
console.log('Sitio estático preparado en dist/');
