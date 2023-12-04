import { useAtomValue } from "jotai";
import { currBoardAtom, historyAtom, turnAtom } from "../lib/store";
import { memo, useMemo } from "react";

import Grid from "./Grid";

import { findAllSolutions } from "../lib/utils";

function PossibleOutcomes({ hidden }: { hidden?: boolean }) {
	const history = useAtomValue(historyAtom);
	const currBoard = useAtomValue(currBoardAtom);
	const turn = useAtomValue(turnAtom);

	const solutions = useMemo(() => {
		return findAllSolutions(history[currBoard], [], turn, 5).slice(0, 6);
	}, [history, currBoard]);

	return (
		<div className="board">
			{solutions.map((sol, k) => (
				<Grid key={k} board={sol} />
			))}
		</div>
	);
}

export default memo(PossibleOutcomes);
