import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components/native'

import Loader from '../components/UI/Loader'
import { Button } from '../components/UI/Button'
import { Typography } from '../components/UI/Typography'
import { WithWrapper } from '../components/UI/WithWrapper'

import { useTriviaApi } from '../hooks/triviaApi'

import Colors from '../constants/colors'

export default function ModalQuizScreen() {
	const { trivias, isLoading } = useTriviaApi()

	const [triviasLength, setTriviasLength] = useState(-1)
	const [currentTriviaIndex, setCurrentTriviaIndex] = useState(1)
	const [currentTrivia, setCurrentTrivia] = useState<Result>()

	useEffect(() => {
		setTriviasLength(trivias?.results.length)

		setCurrentTrivia(trivias?.results[currentTriviaIndex])
	}, [trivias])

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

	const handleDecoding = useCallback((s: string): string => {
		return s?.replace(/&quot;/gi, '"').replace(/&#039;/gi, `'`)
	}, [])

	const handleButtonPress = useCallback((answer: string): void => {}, [])

	return (
		<WithWrapper>
			{isLoading && Loader()}
			{!isLoading && (
				<>
					<Typography type='headline'>{currentTrivia?.category}</Typography>
					<TriviaWrapper>
						<Typography type='question'>
							{handleDecoding(currentTrivia?.question as string)}
						</Typography>
						<Actions>
							<Button
								cb={() => handleButtonPress('True')}
								title='True'
								disabled={false}
							/>
							<Button
								cb={() => handleButtonPress('False')}
								title='False'
								disabled={false}
							/>
						</Actions>
					</TriviaWrapper>
					<Typography type='pagination'>{`${currentTriviaIndex}/${triviasLength}`}</Typography>
				</>
			)}
		</WithWrapper>
	)
}

const TriviaWrapper = styled.View({
	flex: 1,
	borderColor: Colors.WHITE,
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
