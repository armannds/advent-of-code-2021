import { Position } from './position';

export class Day02 {
  part1(inputs: string[]): number {
    const position: Position = {
      vertical: 0,
      horizontal: 0,
    };

    for (let index = 0; index < inputs.length; index++) {
      const readings = inputs[index].split(' ');
      if (readings[0] === 'forward') {
        position.horizontal += parseInt(readings[1]);
      }
      if (readings[0] === 'down') {
        position.vertical += parseInt(readings[1]);
      }
      if (readings[0] === 'up') {
        position.vertical -= parseInt(readings[1]);
      }
    }

    return position.vertical * position.horizontal;
  }

  part2(inputs: string[]): number {
    const position: Position = {
      vertical: 0,
      horizontal: 0,
    };
    let aim = 0;

    for (let index = 0; index < inputs.length; index++) {
      const readings = inputs[index].split(' ');
      if (readings[0] === 'forward') {
        const value = parseInt(readings[1]);
        position.horizontal += value;
        position.vertical += aim * value;
      }
      if (readings[0] === 'down') {
        const value = parseInt(readings[1]);
        aim += value;
      }
      if (readings[0] === 'up') {
        const value = parseInt(readings[1]);
        aim -= value;
      }
    }

    return position.vertical * position.horizontal;
  }
}
