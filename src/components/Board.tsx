import Cell from "./Cell";

export default function Board() {
  return (
    <div className="board">
      <Cell index={0} />
      <Cell index={1} />
      <Cell index={2} />
      <Cell index={3} />
      <Cell index={4} />
      <Cell index={5} />
      <Cell index={6} />
      <Cell index={7} />
      <Cell index={8} />
    </div>
  );
}
