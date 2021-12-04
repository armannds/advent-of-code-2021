import { Day04 } from '.';
import { read } from '../utils/importer';

describe('day04', () => {
  const day04 = new Day04();
  const specInput = read('./src/day04/input.spec.txt');
  const input = read('./inputs/input04.txt');

  it('Given spec input part 1 should return 4512', () => {
    expect(day04.part1(specInput)).toEqual(4512);
  });

  it('Given input part 1 should return 14093', () => {
    expect(day04.part1(input)).toEqual(14093);
  });

  it('Given spec input part 2 should return 1924', () => {
    expect(day04.part2(specInput)).toEqual(1924);
  });

  it('Given input part 2 should return 17388', () => {
    expect(day04.part2(input)).toEqual(17388);
  });
});
