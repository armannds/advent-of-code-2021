export class Day04 {
  part1(input: string): number {
    const [numbers, boards] = this.getNumbersAndBoards(input);

    const drawnNumbers: number[] = [];
    let bingoBoard;
    for (const number of numbers) {
      drawnNumbers.push(number);

      for (const board of boards) {
        if (this.hasBingo(board, drawnNumbers)) {
          bingoBoard = board;
          break;
        }
      }

      if (bingoBoard !== undefined) {
        break;
      }
    }

    const sum = this.calculateSumOfNotDrawnNumbers(bingoBoard, drawnNumbers);
    return sum * drawnNumbers[drawnNumbers.length - 1];
  }

  part2(input: string): number {
    const [numbers, boards] = this.getNumbersAndBoards(input);

    const drawnNumbers: number[] = [];
    let currentBoard: number[][] = [];
    let lastDrawnNumber;
    let remainingBoards = [...boards];

    for (const number of numbers) {
      drawnNumbers.push(number);

      remainingBoards = remainingBoards.filter(board => {
        const hasBingo = this.hasBingo(board, drawnNumbers);
        if (hasBingo) {
          lastDrawnNumber = number;
          currentBoard = board;
        }
        return !hasBingo;
      });

      if (remainingBoards.length === 0) {
        break;
      }
    }

    const sum = this.calculateSumOfNotDrawnNumbers(currentBoard, drawnNumbers);
    return sum * (lastDrawnNumber ?? 0);
  }

  private getNumbersAndBoards(inputs: string): [number[], number[][][]] {
    const [numbersInput, ...boardsInput] = inputs.split('\r\n\r\n');

    const numbers = numbersInput.split(',').map(n => parseInt(n));
    const boards = boardsInput.map(inputBoard =>
      inputBoard.split('\r\n').map(line =>
        line
          .split(' ')
          .map(n => parseInt(n.trim()))
          .filter(n => Number.isInteger(n))
      )
    );
    return [numbers, boards];
  }

  private hasBingo(board: number[][], drawnNumbers: number[]) {
    return (
      board.some(row => row.every(item => drawnNumbers.includes(item))) ||
      this.flipArray(board).some(column =>
        column.every(item => drawnNumbers.includes(item))
      )
    );
  }

  private flipArray = (m: number[][]) => m[0].map((x, i) => m.map(x => x[i]));

  private calculateSumOfNotDrawnNumbers(
    board: number[][],
    drawnNumbers: number[]
  ): number {
    return board
      .map(row => row.filter(n => !drawnNumbers.includes(n)))
      .flat()
      .reduce((a, b) => a + b, 0);
  }
}
