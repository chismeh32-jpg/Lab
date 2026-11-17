import {test} from 'node:test';
import assert from 'node:assert/strict';
import {score,solutions,words,dateKey,dailyIndex} from '../src/engine.js';
test('letras correctas consumen sus apariciones antes de las amarillas',()=>{assert.deepEqual(score('LLAMA','CALMA'),['present','absent','present','correct','correct']);assert.deepEqual(score('CASAS','CALMA'),['correct','correct','absent','present','absent'])});
test('una aparición no produce dos pistas amarillas',()=>{assert.deepEqual(score('MAMMA','MUNDO'),['correct','absent','absent','absent','absent'])});
test('todas las soluciones son palabras válidas de cinco letras',()=>{for(const w of solutions){assert.equal(w.length,5);assert.ok(words.includes(w));assert.deepEqual(score(w,w),Array(5).fill('correct'))}});
test('el día cambia a medianoche en Madrid',()=>{assert.equal(dateKey(new Date('2026-11-17T23:01:00Z')),'2026-11-18');assert.equal(dailyIndex('2026-11-18')-dailyIndex('2026-11-17'),1)});
