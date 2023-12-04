export function checkWinner(board: string[]) {

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (board[a] === "" || board[b] === "" || board[c] === "") {
      continue
    }

    if (board[a] === board[b] && board[b] === board[c]) {
      return true
    }
  }
  return false
}

export function findSolutions(board: string[], solutions: string[][], player: string) {
  
}
