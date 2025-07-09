import React from 'react'

type ControlsProps = {
  onStart: () => void
  onStep: () => void
  onReset: () => void
  isRunning: boolean
}

const Controls: React.FC<ControlsProps> = ({ onStart, onStep, onReset, isRunning }) => {
  return (
    <div className="controls">
      <button onClick={onStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={onStep} disabled={isRunning}>
        Step
      </button>
      <button onClick={onReset}>
        Reset
      </button>
    </div>
  )
}

export default Controls