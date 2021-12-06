import { Day06 } from '.';
import { read } from '../utils/importer';

describe('day05', () => {
  const day06 = new Day06();
  const specInput = read('./src/day06/input.spec.txt');
  const input = read('./inputs/input06.txt');

  it('Given spec input part 1 should return 5934', () => {
    expect(day06.part1(specInput)).toEqual(5934);
  });

  it('Given input part 1 should return 372984', () => {
    expect(day06.part1(input)).toEqual(372984);
  });

  it('Given spec input part 2 should return 26984457539', () => {
    expect(day06.part2(specInput)).toEqual(26984457539);
  });

  it('Given input part 2 should return 1681503251694', () => {
    expect(day06.part2(input)).toEqual(1681503251694);
  });
});
