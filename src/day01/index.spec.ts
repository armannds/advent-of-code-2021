import { Day01 } from '.';
import { readNumberList } from '../utils/importer';

describe('day01', () => {
  const day01 = new Day01();
  const input = readNumberList('./inputs/input01.txt');
  const specInput = readNumberList('./src/day01/input.spec.txt');

  it('Given spec input part 1 should return 7', () => {
    expect(day01.part1(specInput)).toEqual(7);
  });

  it('Given input part 1 should return 1502', () => {
    expect(day01.part1(input)).toEqual(1502);
  });

  it('Given spec input part 2 should return 5', () => {
    expect(day01.part2(specInput)).toEqual(5);
  });

  it('Given input part 2 should return 1538', () => {
    expect(day01.part2(input)).toEqual(1538);
  });
});
