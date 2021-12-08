export default class Day08 {
  part1(input: string[]): number {
    const outputs = input.map(i => i.split('|')[1]);
    const uniqueLengths = [2, 3, 4, 7];

    return outputs
    .flatMap(o => o.split(' '))
    .map(o => o.length)
    .filter(o => uniqueLengths.includes(o))
    .length;
  }

  part2(input: string[]): number {
    const digits = input.map(s => {
      const [signal, output] = s.split(' | ');
      return {
        signal: signal.split(' ').map(l => l.split('').sort().join('')),
        output: output.split(' ').map(l => l.split('').sort().join('')),
      };
    });

    const outputs = [];
    for (const d of digits) {
      const one = d.signal.find(l => l.length === 2);
      const four = d.signal.find(l => l.length === 4);
      const seven = d.signal.find(l => l.length === 3);
      const eight = d.signal.find(l => l.length === 7);

      const zeroSixNine = d.signal.filter(l => l.length === 6);
      const six = zeroSixNine.find(l => !this.match(l, one));
      const nine = zeroSixNine.find(l => this.match(l, four));
      const zero = zeroSixNine.find(l => l !== six && l !==nine);

      const twoThreeFive = d.signal.filter(l => l.length === 5);
      const five = twoThreeFive.find(l => this.match(six, l));
      const three = twoThreeFive.find(l => this.match(l, one));
      const two = twoThreeFive.find(l => l !== five && l !== three);

      
      const values = {
        [zero]: '0',
        [one]: '1',
        [two]: '2',
        [three]: '3',
        [four]: '4',
        [five]: '5',
        [six]: '6',
        [seven]: '7',
        [eight]: '8',
        [nine]: '9',
      };

      outputs.push(d.output.reduce((a, b) => a + values[b], ''));
    }

    return outputs.map(o => parseInt(o)).reduce((a, b) => a + b, 0);
  }

  private match(comparer: string, value: string) : boolean {
    return value.split('').every(v => comparer.includes(v));
  } 
}
