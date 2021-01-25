import React, { useEffect, Suspense } from 'react'
import { useStoreState, useStoreActions } from '../store/hooks'

import Loader from '../components/UI/Loader'

import { WithWrapper } from '../components/UI/WithWrapper'

import { NavigationProps } from '../navigation/screens'
import TriviasView from '../Views/trivias/TriviasView'

export default function ModalQuizScreen({ navigation }: NavigationProps) {
	const init = useStoreActions(actions => actions.trivia.fetchTrivias)
	const resetTrivias = useStoreActions(actions => actions.trivia.resetTrivias)

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
			resetTrivias()
			navigation.replace('RESULTS')
		}
	}, [currentTriviaIndex, triviasLength, navigation])

	return (
		<WithWrapper>
			{isLoading && Loader()}
			{!isLoading && <TriviasView />}
		</WithWrapper>
	)
}
