export default function Grid({ board }: { board: string[] }) {
  return (
    <div className="board">
      <span className="cell small-cell">{board[0]}</span>
      <span className="cell small-cell">{board[1]}</span>
      <span className="cell small-cell">{board[2]}</span>
      <span className="cell small-cell">{board[3]}</span>
      <span className="cell small-cell">{board[4]}</span>
      <span className="cell small-cell">{board[5]}</span>
      <span className="cell small-cell">{board[6]}</span>
      <span className="cell small-cell">{board[7]}</span>
      <span className="cell small-cell">{board[8]}</span>
    </div>
  );
}
