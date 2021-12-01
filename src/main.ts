import { readNumberList } from './utils/importer';
import { Day01 } from './day01';

console.log('-------- Solutions --------');
console.log('-------- Day 01 --------');
const input1 = readNumberList('./inputs/input01.txt');

const day01 = new Day01();
console.log(`Part 1: ${day01.part1(input1)}`);
console.log(`Part 2: ${day01.part2(input1)}`);
