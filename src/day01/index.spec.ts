import { part1, part2 } from './index';
import { readFileSync } from 'fs';
import path = require('path');

describe('day01', () => {
  it('Given input part 1 should return 7', () => {
    const filepath = path.resolve(__dirname, 'input.spec.txt');
    const file = readFileSync(filepath, 'utf-8');
    const input = file.split('\n');
    expect(part1(input)).toEqual(7);
  });

  it('Given input part 2 should return 5', () => {
    const filepath = path.resolve(__dirname, 'input.spec.txt');
    const file = readFileSync(filepath, 'utf-8');
    const input = file.split('\n');
    expect(part2(input)).toEqual(5);
  });
});
