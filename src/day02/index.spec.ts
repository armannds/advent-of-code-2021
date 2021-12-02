import { Day02 } from '.';
import { readStringList } from '../utils/importer';

describe('day02', () => {
  const day02 = new Day02();
  const specInput = readStringList('./src/day02/input.spec.txt');
  const input = readStringList('./inputs/input02.txt');

  it('Given spec input part 1 should return 150', () => {
    expect(day02.part1(specInput)).toEqual(150);
  });
  
  it('Given input part 1 should return 1813801', () => {
    expect(day02.part1(input)).toEqual(1813801);
  });

  it('Given spec input part 2 should return 900', () => {
    expect(day02.part2(specInput)).toEqual(900);
  });

  it('Given input part 2 should return 1960569556', () => {
    expect(day02.part2(input)).toEqual(1960569556);
  });
});
