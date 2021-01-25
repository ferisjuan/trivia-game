import { Action } from "easy-peasy";

export interface IAnswer {
  triviaIndex: number,
  score: boolean
}

export interface IGame {
  answers: IAnswer[]
  registerAnswer: Action<IGame, { triviaIndex: number, score: number }>,
  getScore: Action<IGame, void>
  resetAnswers: Action<IGame>
}
