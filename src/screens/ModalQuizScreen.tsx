import React, { useEffect } from 'react'
import {
	useStoreState,
	useStoreActions,
	useStoreDispatch,
} from '../store/hooks'

import Loader from '../components/UI/Loader'

import { WithWrapper } from '../components/UI/WithWrapper'

import { NavigationProps } from '../navigation/screens'
import TriviasView from '../Views/trivias/TriviasView'

export default function ModalQuizScreen({ navigation }: NavigationProps) {
	const init = useStoreActions(actions => actions.trivia.fetchTrivias)

	const currentTriviaIndex = useStoreState(
		state => state.trivia.currentTriviaIndex
	)

	const triviasLength = useStoreState(state => state.trivia.triviasLength)
	const isLoading = useStoreState(state => state.trivia.isLoading)

	useEffect(() => {
		init()
	}, [init])

	useEffect(() => {
		if (currentTriviaIndex >= triviasLength) {
			navigation.replace('RESULTS')
		}
	}, [currentTriviaIndex, triviasLength])

	/**
 * {
    "response_code": 0,
    "results": Array [
      Object {
        "category": "Science & Nature",
        "correct_answer": "False",
        "difficulty": "hard",
        "incorrect_answers": Array [
          "True",
        ],
        "question": "You can calculate Induced Voltage using: &epsilon; =-N * (d&Phi;B)/(d)",
        "type": "boolean",
      },
    ],
}
 */

	return (
		<WithWrapper>
			{isLoading && Loader()}
			{!isLoading && <TriviasView />}
		</WithWrapper>
	)
}
