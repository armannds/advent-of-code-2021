import { Day05 } from '.';
import { readStringList } from '../utils/importer';

describe('day05', () => {
  const day05 = new Day05();
  const specInput = readStringList('./src/day05/input.spec.txt');
  const input = readStringList('./inputs/input05.txt');

  it('Given spec input part 1 should return 5', () => {
    expect(day05.part1(specInput)).toEqual(5);
  });

  it('Given input part 1 should return 5585', () => {
    expect(day05.part1(input)).toEqual(5585);
  });

  it('Given spec input part 2 should return 12', () => {
    expect(day05.part2(specInput)).toEqual(12);
  });

  it('Given input part 2 should return 17193', () => {
    expect(day05.part2(input)).toEqual(17193);
  });
});
