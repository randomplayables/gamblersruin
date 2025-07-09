import React from 'react'
import StateNode from './StateNode'

type BoardProps = {
  states: number[]
  currentState: number
}

const Board: React.FC<BoardProps> = ({ states, currentState }) => {
  return (
    <div className="board">
      {states.map((state) => (
        <StateNode key={state} value={state} isActive={state === currentState} />
      ))}
    </div>
  )
}

export default Board