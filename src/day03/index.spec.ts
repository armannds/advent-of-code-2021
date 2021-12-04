import { Day03 } from '.';
import { readStringList } from '../utils/importer';

describe('day03', () => {
  const day03 = new Day03();
  const specInput = readStringList('./src/day03/input.spec.txt');
  const input = readStringList('./inputs/input03.txt');

  it('Given spec input part 1 should return 198', () => {
    expect(day03.part1(specInput)).toEqual(198);
  });

  it('Given input part 1 should return 3633500', () => {
    expect(day03.part1(input)).toEqual(3633500);
  });

  it('Given spec input part 2 should return 230', () => {
    expect(day03.part2(specInput)).toEqual(230);
  });

  it('Given input part 2 should return 4550283', () => {
    expect(day03.part2(input)).toEqual(4550283);
  });
});
