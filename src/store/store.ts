import { createStore } from 'easy-peasy'

import game from './models/gameModel'
import trivia from './models/triviaModel'

export const Store = createStore({
  game,
  trivia
})
