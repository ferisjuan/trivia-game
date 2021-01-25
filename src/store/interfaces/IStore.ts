import { IGame } from './IGame'
import { ITrivia } from "./ITrivia";

export interface IStore {
  game: IGame,
  trivia: ITrivia
}
