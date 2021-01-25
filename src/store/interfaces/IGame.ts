import { Action, Computed } from "easy-peasy";

export interface IAnswer {
  triviaIndex: number,
  score: number
}

export interface IGame {
  answers: IAnswer[]
  registerAnswer: Action<IGame, { triviaIndex: number, score: number }>,
  score: Computed<IGame, number>
  resetAnswers: Action<IGame>
}
