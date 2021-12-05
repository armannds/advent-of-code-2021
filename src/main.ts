import { read, readNumberList, readStringList } from './utils/importer';
import { Day01 } from './day01';
import { Day02 } from './day02';
import { Day03 } from './day03';
import { Day04 } from './day04';
import { Day05 } from './day05';


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

console.log('\n');
console.log('-------- Day 03 --------');

const input3 = readStringList('./inputs/input03.txt');
const day03 = new Day03();
console.log(`Part 1: ${day03.part1(input3)}`);
console.log(`Part 2: ${day03.part2(input3)}`);

console.log('\n');
console.log('-------- Day 4 --------');

const input4 = read('./inputs/input04.txt');
const day04 = new Day04();
console.log(`Part 1: ${day04.part1(input4)}`);
console.log(`Part 2: ${day04.part2(input4)}`);

console.log('\n');
console.log('-------- Day 5 --------');

const input5 = readStringList('./inputs/input05.txt');
const day05 = new Day05();
console.log(`Part 1: ${day05.part1(input5)}`);
console.log(`Part 2: ${day05.part2(input5)}`);
