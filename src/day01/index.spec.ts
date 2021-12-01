import { Day01 } from '.';
import { readFileSync } from 'fs';
import path = require('path');

describe('day01', () => {
  const day01 = new Day01();
  it('Given input part 1 should return 7', () => {
    const filepath = path.resolve(__dirname, 'input.spec.txt');
    const file = readFileSync(filepath, 'utf-8');
    const input = file.split('\n');
    expect(day01.part1(input)).toEqual(7);
  });

  it('Given input part 2 should return 5', () => {
    const filepath = path.resolve(__dirname, 'input.spec.txt');
    const file = readFileSync(filepath, 'utf-8');
    const input = file.split('\n');
    expect(day01.part2(input)).toEqual(5);
  });
});
