import { useAtomValue } from "jotai";
import { memo, useMemo } from "react";
import { currBoardAtom, historyAtom, turnAtom } from "../lib/store";

import Grid from "./Grid";

import { findAllSolutions } from "../lib/utils";

export const PossibleOutcomes = memo(() => {
	const history = useAtomValue(historyAtom);
	const currBoard = useAtomValue(currBoardAtom);
	const turn = useAtomValue(turnAtom);

	const solutions = useMemo(() => {
		return findAllSolutions(history[currBoard], [], turn).slice(0, 6);
	}, [history, currBoard, turn]);

	return (
		<div className="board">
			{solutions.map((sol, k) => (
				<Grid key={k} board={sol} />
			))}
		</div>
	);
})
