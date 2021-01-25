import axios from "axios";
import { action, computed, thunk } from "easy-peasy";

import { ITrivia } from "../interfaces/ITrivia";

const model: ITrivia = {
  trivias: [],
  currentTrivia: computed(state => state.trivias[state.currentTriviaIndex]),
  currentTriviaAnswer: computed(state => state.trivias[state.currentTriviaIndex].correct_answer),
  currentTriviaIndex: 0,
  isLoading: false,
  triviasLength: computed(state => state.trivias.length),
  fetchTrivias: thunk(async (actions) => {
    actions.setIsLoading({ isLoading: true })

    const { data } = await axios('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')

    actions.setIsLoading({ isLoading: false })

    const trivias = data.results
    actions.setTrivias({ trivias })
  }),
  nextCurrentTriviaIndex: action((state) => {
    state.currentTriviaIndex += 1
  }),
  setTrivias: action((state, { trivias }) => {
    state.trivias = trivias
  }),
  setIsLoading: action((state, { isLoading }) => {
    state.isLoading = isLoading
  })

}

export default model
