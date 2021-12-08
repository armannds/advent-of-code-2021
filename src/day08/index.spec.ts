import Day08 from '.';
import { readStringList } from '../utils/importer';

describe('day08', () => {
  const day08 = new Day08();
  const specInput = readStringList('./src/day08/input.spec.txt');
  const input = readStringList('./inputs/input08.txt');

  it('Given spec input part 1 should return 26', () => {
    expect(day08.part1(specInput)).toEqual(26);
  });

  it('Given input part 1 should return 349', () => {
    expect(day08.part1(input)).toEqual(349);
  });

  it('Given spec input part 2 should return 61229', () => {
    expect(day08.part2(specInput)).toEqual(61229);
  });

  it('Given input part 2 should return 1070957', () => {
    expect(day08.part2(input)).toEqual(1070957);
  });
});
