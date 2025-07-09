export function random(): number {
  return Math.random();
}

export function randomBoolean(probability: number): boolean {
  return Math.random() < probability;
}