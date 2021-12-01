import { Day01 } from '.';
import { readNumberList } from '../utils/importer';
import path = require('path');

describe('day01', () => {
  const day01 = new Day01();
  const filepath = path.resolve(__dirname, 'input.spec.txt');
  const input = readNumberList(filepath);

  it('Given input part 1 should return 7', () => {
    expect(day01.part1(input)).toEqual(7);
  });

  it('Given input part 2 should return 5', () => {
    expect(day01.part2(input)).toEqual(5);
  });
});
