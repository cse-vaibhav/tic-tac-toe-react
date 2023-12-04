import "./App.css";

import { useState } from "react";
import {
	currBoardAtom,
	historyAtom,
	turnAtom,
	winnerAtom,
	useResetBoard,
} from "./lib/store";
import { findAllSolutions } from "./lib/utils";
import { useSetAtom, useAtomValue } from "jotai";

import Board from "./components/Board";
import CycleHistory from "./components/CycleHistory";
import Grid from "./components/Grid";
import PossibleOutcomes from "./components/PossibleOutcomes";

import ArrowRotateLeft from "./icons/ArrowRotateLeft";
import ClockRotateLeft from "./icons/ClockRotateLeft";

function App() {
	const history = useAtomValue(historyAtom);
	const turn = useAtomValue(turnAtom);
	const winner = useAtomValue(winnerAtom);
	const setMove = useSetAtom(currBoardAtom);
	const currBoard = useAtomValue(currBoardAtom);

	const [showHistory, setHistory] = useState(false);

	const resetBoard = useResetBoard();

	const moves = history.map((board, moves) => {
		const description = moves > 0 ? "Go to move #" + moves : "Go to game start";
		return (
			<li key={moves}>
				<button onClick={() => setMove(moves)}>{description}</button>
			</li>
		);
	});

	return (
		<div className="App">
			<h1>Tic Tac Toe</h1>

			<div className="controls">
				<button className="icon-button" onClick={resetBoard}>
					{" "}
					<ArrowRotateLeft /> Reset
				</button>
				<button
					onClick={() => setHistory(!showHistory)}
					className="icon-button"
				>
					<ClockRotateLeft /> History
				</button>
			</div>

			{winner ? <h4>Winner: {winner}</h4> : <h4>This is {turn}'s turn</h4>}

			<Board />
			{showHistory && <CycleHistory />}

		  {history.length > 1 && <PossibleOutcomes />}
		</div>
	);
}

export default App;
