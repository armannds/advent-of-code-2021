import { Coordinate } from './coordinate';

export class Day05 {
  part1(input: string[]): number {
    const coordinates = this.getCoordinates(input);

    const map: number[][] = [];
    for (const coord of coordinates) {
      if (coord.fromY === coord.endY) {
        const start = Math.min(coord.fromX, coord.endX);
        const end = Math.max(coord.fromX, coord.endX);

        for (let x = start; x <= end; x++) {
          this.incrementMap(x, coord.fromY, map);
        }
      }

      if (coord.fromX === coord.endX) {
        const start = Math.min(coord.fromY, coord.endY);
        const end = Math.max(coord.fromY, coord.endY);
        for (let y = start; y <= end; y++) {
          this.incrementMap(coord.fromX, y, map);
        }
      }
    }

    return map.flat().filter(m => m > 1).length;
  }

  part2(input: string[]): number {
    const coordinates = this.getCoordinates(input);

    const map: number[][] = [];
    for (const coord of coordinates) {
      if (coord.fromY === coord.endY) {
        const start = Math.min(coord.fromX, coord.endX);
        const end = Math.max(coord.fromX, coord.endX);

        for (let x = start; x <= end; x++) {
          this.incrementMap(x, coord.fromY, map);
        }
      }

      if (coord.fromX === coord.endX) {
        const start = Math.min(coord.fromY, coord.endY);
        const end = Math.max(coord.fromY, coord.endY);

        for (let y = start; y <= end; y++) {
          this.incrementMap(coord.fromX, y, map);
        }
      }

      if (
        (coord.fromX > coord.endX && coord.fromY > coord.endY) ||
        (coord.fromX < coord.endX && coord.fromY < coord.endY)
      ) {
        const end =
          Math.max(coord.fromX, coord.endX) - Math.min(coord.fromX, coord.endX);
        for (let x = 0; x <= end; x++) {
          const xpos = Math.min(coord.fromX, coord.endX) + x;
          const ypos = Math.min(coord.fromY, coord.endY) + x;
          this.incrementMap(xpos, ypos, map);
        }
      }

      if (coord.fromX < coord.endX && coord.fromY > coord.endY) {
        const end =
          Math.max(coord.fromX, coord.endX) - Math.min(coord.fromX, coord.endX);
        for (let x = 0; x <= end; x++) {
          const xpos = coord.fromX + x;
          const ypos = coord.fromY - x;
          this.incrementMap(xpos, ypos, map);
        }
      }

      if (coord.fromX > coord.endX && coord.fromY < coord.endY) {
        const end =
          Math.max(coord.fromX, coord.endX) - Math.min(coord.fromX, coord.endX);
        for (let x = 0; x <= end; x++) {
          const xpos = coord.fromX - x;
          const ypos = coord.fromY + x;
          this.incrementMap(xpos, ypos, map);
        }
      }
    }
    return map.flat().filter(m => m > 1).length;
  }

  private getCoordinates(input: string[]) : Coordinate[] {
    return input.map(row => {
      const points = row
        .split(' -> ')
        .map(p => p.split(',').map(p => parseInt(p)));
      const coordinate: Coordinate = {
        fromX: points[0][0],
        fromY: points[0][1],
        endX: points[1][0],
        endY: points[1][1],
      };
      return coordinate;
    });
  }

  private incrementMap(x: number, y: number, map: number[][]) {
    if (!map[x]) {
      map[x] = [];
    }
    map[x][y] = !map[x][y] ? 1 : map[x][y] + 1;
  }
}
