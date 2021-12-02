import { readNumberList, readStringList } from './utils/importer';
import { Day01 } from './day01';
import { Day02 } from './day02';

console.log('-------- Solutions --------');
console.log('\n');
console.log('-------- Day 01 --------');

const input1 = readNumberList('./inputs/input01.txt');
const day01 = new Day01();
console.log(`Part 1: ${day01.part1(input1)}`);
console.log(`Part 2: ${day01.part2(input1)}`);

console.log('\n');
console.log('-------- Day 02 --------');

const input2 = readStringList('./inputs/input02.txt');
const day02 = new Day02();
console.log(`Part 1: ${day02.part1(input2)}`);
console.log(`Part 2: ${day02.part2(input2)}`);

