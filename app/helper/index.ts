export function calculateWinner(squares: (string|null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i]
      }
    }
  }
  return {
    winner: null,
    line: []
  };
}

export function getStrike(line: number[]) {
  const [a,b,c] = line

  if(a === 0 && b === 1 && c=== 2) {
    return 'row_1'
  } 
  else if(a === 3 && b === 4 && c=== 5) {
    return 'row_2'
  }
  else if(a === 6 && b === 7 && c=== 8) {
    return 'row_3'
  }
  else if(a === 0 && b === 3 && c=== 6) {
    return 'col_1'
  }
  else if(a === 1 && b === 4 && c=== 7) {
    return 'col_2'
  }
  else if(a === 2 && b === 5 && c=== 8) {
    return 'col_3'
  }
  else if(a === 0 && b === 4 && c=== 8) {
    return 'backSlash'
  }
  else if(a === 2 && b === 4 && c=== 6) {
    return 'slash'
  } else {
    return ''
  }
}