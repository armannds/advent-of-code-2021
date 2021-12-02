import { Position } from './position';

export class Day02 {
  part1(inputs: string[]): number {
    const position: Position = {
      vertical: 0,
      horizontal: 0,
    };

    inputs
      .map(s => {
        const readings = s.split(' ');
        return [readings[0], parseInt(readings[1])] as [string, number];
      })
      .forEach(([direction, value]) => {
        if (direction === 'forward') {
          position.horizontal += value;
        }
        if (direction === 'down') {
          position.vertical += value;
        }
        if (direction === 'up') {
          position.vertical -= value;
        }
      });

    return position.vertical * position.horizontal;
  }

  part2(inputs: string[]): number {
    const position: Position = {
      vertical: 0,
      horizontal: 0,
    };
    let aim = 0;

    inputs
      .map(s => {
        const readings = s.split(' ');
        return [readings[0], parseInt(readings[1])] as [string, number];
      })
      .forEach(([direction, value]) => {
        if (direction === 'forward') {
          position.horizontal += value;
          position.vertical += aim * value;
        }
        if (direction === 'down') {
          aim += value;
        }
        if (direction === 'up') {
          aim -= value;
        }
      });

    return position.vertical * position.horizontal;
  }
}
