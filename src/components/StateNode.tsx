import React from 'react'

type StateNodeProps = {
  value: number
  isActive: boolean
}

const StateNode: React.FC<StateNodeProps> = ({ value, isActive }) => {
  return (
    <div className={`state-node${isActive ? ' active' : ''}`}>
      {value}
    </div>
  )
}

export default StateNode