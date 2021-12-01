export function part1(inputs: string[]): number {
  let increments = 0;
  const numbers = getNumbers(inputs);
  for (let index = 1; index < numbers.length; index++) {
    numbers[index] > numbers[index - 1] && increments++;
  }
  return increments;
}

export function part2(inputs: string[]): number {
  let increments = 0;
  const numbers = getNumbers(inputs);
  let previousValue = 0;
  for (let index = 2; index < numbers.length; index++) {
    const value = numbers[index - 2] + numbers[index - 1] + numbers[index];
    previousValue != 0 && value > previousValue && increments++;
    previousValue = value;
  }

  return increments;
}

function getNumbers(inputs: string[]): number[] {
  return inputs.map((n) => parseInt(n));
}
