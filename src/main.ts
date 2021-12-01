import { readFileSync } from 'fs';
import { Day01 } from './day01';
import path = require('path');

console.log('-------- Solutions --------');
console.log('-------- Day 01 --------');

const filepath = path.resolve(__dirname, './inputs/input01.txt');
const file1 = readFileSync(filepath, 'utf-8');
const input1 = file1.split('\n').map(i => i.trim());

const day01 = new Day01();
console.log(`Part 1: ${day01.part1(input1)}`);
console.log(`Part 2: ${day01.part2(input1)}`);
