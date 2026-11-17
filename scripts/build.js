import {mkdir,readFile,writeFile,copyFile} from 'node:fs/promises';
await mkdir('dist/src',{recursive:true});
const html=(await readFile('index.html','utf8')).replaceAll('href="/src/','href="./src/').replaceAll('src="/src/','src="./src/').replaceAll('href="/"','href="./"');
await writeFile('dist/index.html',html);
for(const file of ['farm.js','farm-engine.js','farm.css'])await copyFile('src/'+file,'dist/src/'+file);
await writeFile('dist/.nojekyll','');
console.log('Sitio estático preparado en dist/');
