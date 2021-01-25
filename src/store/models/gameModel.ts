import { action, computed } from "easy-peasy"
import { IGame } from "../interfaces/IGame"

const model: IGame = {
  answers: [],
  registerAnswer: action((state, { triviaIndex, score }): void => {
    state.answers.push({
      triviaIndex, score
    })
  }),
  score: computed((state) => state.answers.reduce((accumulator, current) => {
    return current.score + accumulator
  }, 0)
  ),
  resetAnswers: action((state): void => {
    state.answers = []
  })
}

export default model
