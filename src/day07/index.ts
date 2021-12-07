export class Day07 {
  part1(input: string): number {
    const crabs = input.split(',').map(n => parseInt(n));
    const minPos = Math.min(...crabs);
    const maxPos = Math.max(...crabs);
    let minimumMoves = Number.MAX_VALUE;

    for (let position = minPos; position <= maxPos; position++) {
      const moves = crabs.reduce(
        (acc, curr) => acc + Math.abs(curr - position),
        0
      );
      minimumMoves = Math.min(minimumMoves, moves);
    }

    return minimumMoves;
  }

  part2(input: string): number {
    const crabs = input.split(',').map(n => parseInt(n));
    const minPos = Math.min(...crabs);
    const maxPos = Math.max(...crabs);
    let minimumMoves = Number.MAX_VALUE;

    for (let position = minPos; position <= maxPos; position++) {
      const moves = crabs.reduce((acc, curr) => {
        const move = Math.abs(curr - position);
        const calculatedFuel = (move * (move + 1)) / 2;
        return acc + calculatedFuel;
      }, 0);
      minimumMoves = Math.min(minimumMoves, moves);
    }

    return minimumMoves;
  }
}
