import { Action, Computed, Thunk } from "easy-peasy";

export interface ITrivia {
  trivias: Trivia[]
  currentTrivia: Computed<ITrivia, Trivia>,
  currentTriviaAnswer: Computed<ITrivia, string>,
  currentTriviaIndex: number,
  isLoading: boolean,
  triviasLength: Computed<ITrivia, number>,
  fetchTrivias: Thunk<ITrivia>,
  nextCurrentTriviaIndex: Action<ITrivia>
  resetTrivias: Action<ITrivia>
  setCurrentTriviaIndex: Action<ITrivia, { index: number }>
  setIsLoading: Action<ITrivia, { isLoading: boolean }>
  setTrivias: Action<ITrivia, { trivias: Trivia[] }>
}
