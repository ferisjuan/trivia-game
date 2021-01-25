import React from 'react'
import { Typography } from '../../components/UI/Typography'
import TriviaBody from './TriviaBody'

import { useStoreState } from '../../store/hooks'

export default function TriviasView() {
	const currentTrivia = useStoreState(state => state.trivia.currentTrivia)
	const currentTriviaIndex = useStoreState(
		state => state.trivia.currentTriviaIndex
	)
	const triviasLength = useStoreState(state => state.trivia.triviasLength)
	return (
		<>
			<Typography type='headline'>{currentTrivia?.category}</Typography>
			<TriviaBody onButtonPress={() => {}} />
			<Typography type='pagination'>{`${
				currentTriviaIndex + 1
			}/${triviasLength}`}</Typography>
		</>
	)
}
