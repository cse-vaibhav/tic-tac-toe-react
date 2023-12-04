
import { currBoardAtom, historyAtom } from "../lib/store"
import { useAtom, useAtomValue } from "jotai"

export default function CycleHistory() {

  const [currBoard, setCurrBoard] = useAtom(currBoardAtom)
  const history = useAtomValue(historyAtom)

  return (
    history.length == 1
    ? "No History"
    : (
      <ul className="history-cycle">
        <li><button disabled={currBoard === 0} onClick={() => setCurrBoard(currBoard - 1)}>Previous</button></li>
        <li>Cycle througth History</li>
        <li><button disabled={currBoard === history.length - 1} onClick={() => setCurrBoard(currBoard + 1)}>Next</button></li>
      </ul>
    )
  )
  }
