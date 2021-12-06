export class Day06 {
  part1(input: string): number {
    return this.countLanternFish(input, 80);
  }

  part2(input: string): number {
    return this.countLanternFish(input, 256);
  }

  private countLanternFish(input: string, days: number) : number {
    let mapper = new Map<number, number>();
    input
      .split(',')
      .map(l => parseInt(l))
      .forEach(l => {
        mapper.set(
          l,
          isNaN(mapper.get(l)) || mapper.get(l) === undefined
            ? 1
            : mapper.get(l) + 1
        );
      });

    for (let day = 1; day <= days; day++) {
      const counter = new Map<number, number>();
      for (const [key, value] of mapper) {
        if (key === 0) {
          this.addToMap(8, value, counter);
          this.addToMap(6, value, counter);
        } else {
          this.addToMap(key - 1, value, counter);
        }
      }
      mapper = counter;
    }

    let sum = 0;
    mapper.forEach(value => sum += value);
    return sum;
  }

  private addToMap(key: number, value: number, map: Map<number, number>) {
    map.set(key, isNaN(map.get(key)) ? value : map.get(key) + value);
  }
}
