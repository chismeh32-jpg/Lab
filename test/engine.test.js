import {test} from 'node:test';
import assert from 'node:assert/strict';
import {score,solutions,words,dateKey,dailyIndex} from '../src/engine.js';
test('letras correctas consumen sus apariciones antes de las amarillas',()=>{assert.deepEqual(score('LLAMA','CALMA'),['present','absent','present','correct','correct']);assert.deepEqual(score('CASAS','CALMA'),['correct','correct','absent','present','absent'])});
test('una aparición no produce dos pistas amarillas',()=>{assert.deepEqual(score('MAMMA','MUNDO'),['correct','absent','absent','absent','absent'])});
test('todas las soluciones son palabras válidas de cinco letras',()=>{for(const w of solutions){assert.equal(w.length,5);assert.ok(words.includes(w));assert.deepEqual(score(w,w),Array(5).fill('correct'))}});
test('el día cambia a medianoche en Madrid',()=>{assert.equal(dateKey(new Date('2026-11-17T23:01:00Z')),'2026-11-18');assert.equal(dailyIndex('2026-11-18')-dailyIndex('2026-11-17'),1)});

import {answerPool,answerForDay,hardViolation,normalizeWord,restoreGame} from '../src/engine.js';
test('banco ampliado válido y ciclo diario sin repeticiones',()=>{assert.ok(answerPool.length>300);const used=new Set();for(let i=0;i<answerPool.length;i++){const date=new Date(Date.UTC(2026,10,18+i)).toISOString().slice(0,10);const answer=answerForDay(date);assert.ok(words.includes(answer),answer);assert.ok(!used.has(answer),answer);used.add(answer)}});
test('tildes se normalizan y la Ñ se conserva',()=>{assert.equal(normalizeWord('árbol'),'ARBOL');assert.equal(normalizeWord('niños'),'NIÑOS');assert.equal(normalizeWord('güera'),'GUERA')});
test('modo exigente requiere posición y cantidad descubiertas',()=>{assert.match(hardViolation('CALOR',['LLAMA'],'CALMA'),/posición 4/);assert.ok(hardViolation('COLUM',['LLAMA'],'CALMA'));assert.equal(hardViolation('CALMA',['LLAMA'],'CALMA'),'')});
test('restaurar ignora estado terminal falso y rechaza datos corruptos',()=>{assert.equal(restoreGame({answer:'BRISA',guesses:['BRISA'],finished:false},'LIBRO').won,true);assert.equal(restoreGame({answer:'BRISA',guesses:['LIBRO'],won:true},'LIBRO').won,false);assert.equal(restoreGame({answer:'BRISA',guesses:['XXXXX']},'LIBRO').answer,'LIBRO')});
