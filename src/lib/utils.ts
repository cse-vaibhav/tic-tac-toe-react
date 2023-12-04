export function checkWinner(board: string[], player: string) {

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

    if (player == board[a] && board[a] === board[b] && board[b] === board[c]) {
      return true
    }
  }
  return false
}

export function findAllSolutions(board: string[], solutions: string[][], player: string) {
  // Base case: if the game is over, add the board to the solutions
  if (checkWinner(board, player)) {
    solutions.push(board.slice())
    return solutions
  }

  // Recursively call findAllSolutions for each empty cell
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = player
      findAllSolutions(board, solutions, player === "X" ? "O" : "X")
      board[i] = ""
    }
  }

  return solutions
}

