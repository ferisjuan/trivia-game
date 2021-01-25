import axios from "axios";
import { action, computed, thunk } from "easy-peasy";

import { ITrivia } from "../interfaces/ITrivia";

const model: ITrivia = {
  trivias: [],
  currentTrivia: computed(state => state.trivias[state.currentTriviaIndex]),
  currentTriviaAnswer: computed(state => state.currentTrivia?.correct_answer),
  currentTriviaIndex: -1,
  isLoading: false,
  triviasLength: computed(state => state.trivias.length),
  fetchTrivias: thunk(async (actions) => {
    actions.setIsLoading({ isLoading: true })

    const { data } = await axios('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')

    actions.setIsLoading({ isLoading: false })

    const trivias = data?.results
    actions.setTrivias({ trivias })
    actions.setCurrentTriviaIndex({ index: 0 })

  }),
  nextCurrentTriviaIndex: action((state) => {
    state.currentTriviaIndex += 1
  }),
  resetTrivias: action((state) => {
    state.trivias = []
    state.currentTriviaIndex = -1
  }),
  setCurrentTriviaIndex: action((state, { index }) => {
    state.currentTriviaIndex = index
  }),
  setTrivias: action((state, { trivias }) => {
    state.trivias = trivias
  }),
  setIsLoading: action((state, { isLoading }) => {
    state.isLoading = isLoading
  })

}

export default model
