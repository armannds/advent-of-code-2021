export class Day01 {
  part1(inputs: number[]): number {
    let increments = 0;
    for (let index = 1; index < inputs.length; index++) {
      inputs[index] > inputs[index - 1] && increments++;
    }
    return increments;
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

  private getNumbers(inputs: string[]): number[] {
    return inputs.map(n => parseInt(n));
  }
}
