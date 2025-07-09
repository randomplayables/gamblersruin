export interface InitGameSessionResponse {
  sessionId: string;
}

export interface SaveGameDataResponse {
  [key: string]: any;
}

export interface SaveGameDataPayload {
  sessionId: string;
  roundNumber: number;
  roundData: any;
}

export interface GameConfig {
  startingCapital: number;
  targetCapital: number;
  winProbability: number;
  loseProbability: number;
}

export interface GameState {
  states: number[];
  currentState: number;
  history: number[];
  isRunning: boolean;
  roundNumber: number;
}

export interface UseGamblerRuinReturn extends GameState {
  start: () => void;
  step: () => void;
  reset: () => void;
}