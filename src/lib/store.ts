import { atom, useSetAtom } from "jotai"

export const turnAtom = atom<"X" | "O">("X")
export const winnerAtom = atom<string | null>(null)
export const historyAtom = atom<string[][]>([Array(9).fill("")])
export const currBoardAtom = atom(0)

export const useResetBoard = () => {
  const setWinner = useSetAtom(winnerAtom);
  const setTurn = useSetAtom(turnAtom);
  const setHistory = useSetAtom(historyAtom);
  const setCurrBoard = useSetAtom(currBoardAtom);

  const resetBoard = () => {
    setTurn("X");
    setWinner(null);
    setHistory([Array(9).fill("")])
    setCurrBoard(0);
  };

  return resetBoard;
};

