import { useAtom } from "jotai";
import { currBoardAtom, historyAtom, turnAtom, winnerAtom } from "../lib/store";
import { checkWinner } from "../lib/utils";

export default function Cell({ index }: { index: number }) {
  const [turn, setTurn] = useAtom(turnAtom);
  const [history, setHistory] = useAtom(historyAtom);
  const [winner, setWinner] = useAtom(winnerAtom);
  const [currBoard, setCurrBoard] = useAtom(currBoardAtom);

  const board = history[currBoard].slice();
  const value = board[index];

  const onClick = () => {
    // Prevent changing the value if the cell is already filled
    if (value !== "" || winner) return;

    board[index] = turn;
    setHistory([...history, board]);
    setCurrBoard(currBoard + 1);

    // check for a winner
    const res = checkWinner(board, turn);
    if (res) {
      setWinner(turn);
      return;
    }

    setTurn(turn === "X" ? "O" : "X");
  };

  return (
    <div onClick={onClick} className="cell">
      {value}
    </div>
  );
}
