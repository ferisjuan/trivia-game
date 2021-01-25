import { action } from "easy-peasy"
import { IAnswer, IGame } from "../interfaces/IGame"

const model: IGame = {
  answers: [],
  registerAnswer: action((state, { triviaIndex, score: userRate }: IAnswer): void => {
    state.answers.push({
      triviaIndex, score: userRate
    })
  }),
  getScore: action((state) => {
    state.answers.filter(answer => answer).length
  }),
  resetAnswers: action((state): void => {
    state.answers = []
  })
}

export default model
