export class Day03 {
  part1(inputs: string[]): number {
    const binaryLength = inputs[0].split('').length;
    let mostCommon = '';
    let leastCommon = '';

    for (let index = 0; index < binaryLength; index++) {
      let zeros = 0;
      let ones = 0;
      for (let j = 0; j < inputs.length; j++) {
        const number = +inputs[j].split('')[index];
        number === 0 ? zeros++ : ones++;
      }
      if (zeros > ones) {
        mostCommon += '0';
        leastCommon += '1';
      } else {
        mostCommon += '1';
        leastCommon += '0';
      }
    }

    const gamma = parseInt(mostCommon, 2);
    const epsilon = parseInt(leastCommon, 2);

    return gamma * epsilon;
  }

  part2(inputs: string[]): number {
    const binaryLength = inputs[0].split('').length;
    const binariesCommon = [...inputs];
    const binariesLeast = [...inputs];

    for (let index = 0; index < binaryLength; index++) {
      let zeros = 0;
      let ones = 0;
      if (binariesCommon.length === 1) {
        break;
      }
      for (let j = 0; j < binariesCommon.length; j++) {
        const number = +binariesCommon[j].split('')[index];
        number === 0 ? zeros++ : ones++;
      }

      for (let k = 0; k < binariesCommon.length; k++) {
        if (binariesCommon.length === 1) {
          continue;
        }
        if (zeros == ones && binariesCommon[k].split('')[index] === '0') {
          binariesCommon.splice(k, 1);
          k--;
        }
        if (zeros > ones && binariesCommon[k].split('')[index] === '1') {
          binariesCommon.splice(k, 1);
          k--;
        }
        if (ones > zeros && binariesCommon[k].split('')[index] === '0') {
          binariesCommon.splice(k, 1);
          k--;
        }
      }
    }

    for (let index = 0; index < binaryLength; index++) {
      let zeros = 0;
      let ones = 0;
      if (binariesLeast.length === 1) {
        break;
      }
      for (let j = 0; j < binariesLeast.length; j++) {
        const number = +binariesLeast[j].split('')[index];
        number === 0 ? zeros++ : ones++;
      }

      for (let k = 0; k < binariesLeast.length; k++) {
        if (binariesLeast.length === 1) {
          continue;
        }
        if (zeros == ones && binariesLeast[k].split('')[index] === '1') {
          binariesLeast.splice(k, 1);
          k--;
        }
        if (zeros > ones && binariesLeast[k].split('')[index] === '0') {
          binariesLeast.splice(k, 1);
          k--;
        }
        if (ones > zeros && binariesLeast[k].split('')[index] === '1') {
          binariesLeast.splice(k, 1);
          k--;
        }
      }
    }

    return parseInt(binariesCommon[0], 2) * parseInt(binariesLeast[0], 2);
  }
}
