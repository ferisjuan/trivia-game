import React, { useCallback } from 'react'
import styled from 'styled-components/native'
import { Button } from '../../components/UI/Button'
import { Typography } from '../../components/UI/Typography'
import colors from '../../constants/colors'

import { useStoreActions, useStoreState } from '../../store/hooks'

export default () => {
	const currentTrivia = useStoreState(state => state.trivia.currentTrivia)
	const currentTriviaAnswer = useStoreState(
		state => state.trivia.currentTriviaAnswer
	)
	const triviaIndex = useStoreState(state => state.trivia.currentTriviaIndex)
	const registerAnswer = useStoreActions(actions => actions.game.registerAnswer)

	const nextCurrentTriviaIndex = useStoreActions(
		actions => actions.trivia.nextCurrentTriviaIndex
	)

	const handleAnswerSelect = useCallback(answer => {
		const score = answer === currentTriviaAnswer ? 10 : 0
		console.log(currentTrivia, answer, currentTriviaAnswer, score, triviaIndex)
		registerAnswer({ triviaIndex, score })
		nextCurrentTriviaIndex()
	}, [])

	const handleDecoding = useCallback((s: string): string => {
		return s?.replace(/&quot;/gi, '"').replace(/&#039;/gi, `'`)
	}, [])

	return (
		<>
			<TriviaWrapper>
				<Typography type='question'>
					{handleDecoding(currentTrivia?.question as string)}
				</Typography>
				<Actions>
					<Button cb={() => handleAnswerSelect('True')} title='True' />
					<Button cb={() => handleAnswerSelect('False')} title='False' />
				</Actions>
			</TriviaWrapper>
		</>
	)
}

const TriviaWrapper = styled.View({
	flex: 1,
	backgroundColor: colors.WHITE,
	borderColor: colors.WHITE,
	borderRadius: 5,
	borderWidth: 5,
	margin: 5,
	padding: 10,
	width: '94%',
})

const Actions = styled.View({
	flex: 1,
	flexDirection: 'row',
})
