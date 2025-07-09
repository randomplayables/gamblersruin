import React from 'react';
import useGamblerRuin from './hooks/useGamblerRuin';
import Board from './components/Board';
import Controls from './components/Controls';
import Chart from './components/Chart';

const App: React.FC = () => {
  const {
    states,
    currentState,
    history,
    isRunning,
    roundNumber,
    start,
    step,
    reset,
  } = useGamblerRuin();

  return (
    <div className="app-container">
      <h1>Gambler's Ruin Simulation</h1>
      <Board states={states} currentState={currentState} />
      <Controls
        onStart={start}
        onStep={step}
        onReset={reset}
        isRunning={isRunning}
      />
      <div className="info">
        <span>Round: {roundNumber}</span>
        <span>Capital: {currentState}</span>
      </div>
      <Chart data={history} />
    </div>
  );
};

export default App;