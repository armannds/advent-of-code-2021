export class Day01 {
  part1(inputs: number[]): number {
    return inputs
      .slice(1)
      .reduce((a, x, i) => a + (inputs[i] < x ? 1 : 0), 0);
  }

  part2(inputs: number[]): number {
    let increments = 0;
    let previousValue = 0;
    for (let index = 2; index < inputs.length; index++) {
      const value = inputs[index - 2] + inputs[index - 1] + inputs[index];
      previousValue != 0 && value > previousValue && increments++;
      previousValue = value;
    }

    return increments;
  }
}
