import ReactFlow from "reactflow"

import "reactflow/dist/style.css"

export default function PossibleOutcomes() {
  return (
    <div className="possible-outcomes">
      <h2>Possible Outcomes</h2>
      <ReactFlow nodes={[]} edges={[]} />
    </div>
  )
}
