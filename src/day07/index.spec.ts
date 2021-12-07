import { Day07 } from '.';
import { read } from '../utils/importer';

describe('day07', () => {
  const day07 = new Day07();
  const specInput = read('./src/day07/input.spec.txt');
  const input = read('./inputs/input07.txt');

  it('Given spec input part 1 should return 37', () => {
    expect(day07.part1(specInput)).toEqual(37);
  });

  it('Given input part 1 should return 348664', () => {
    expect(day07.part1(input)).toEqual(348664);
  });

  it('Given spec input part 2 should return 168', () => {
    expect(day07.part2(specInput)).toEqual(168);
  });

  it('Given input part 2 should return 100220525', () => {
    expect(day07.part2(input)).toEqual(100220525);
  });
});
