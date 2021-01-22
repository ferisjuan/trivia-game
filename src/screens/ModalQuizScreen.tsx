import React, { useCallback, useEffect, useState } from 'react'

import Loader from '../components/UI/Loader'
import TriviaBody from '../Views/trivias/TriviaBody'

import { Typography } from '../components/UI/Typography'
import { WithWrapper } from '../components/UI/WithWrapper'

import { useTriviaApi } from '../hooks/triviaApi'
import { NavigationProps } from '../navigation/screens'

export default function ModalQuizScreen({ navigation }: NavigationProps) {
	const { trivias, isLoading } = useTriviaApi()

	const [triviasLength, setTriviasLength] = useState(10)
	const [currentTriviaIndex, setCurrentTriviaIndex] = useState(0)
	const [currentTrivia, setCurrentTrivia] = useState<Result>()

	useEffect(() => {
		setTriviasLength(trivias?.results.length)
		setCurrentTrivia(trivias?.results[currentTriviaIndex])
	}, [trivias, triviasLength, currentTriviaIndex])

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

	const handleDecoding = useCallback((s: string): string => {
		return s?.replace(/&quot;/gi, '"').replace(/&#039;/gi, `'`)
	}, [])

	const handleButtonPress = useCallback(
		(answer: boolean): void => {
			const correctAnswer = currentTrivia?.correct_answer
			setCurrentTriviaIndex(currentTriviaIndex + 1)
			console.log(answer === correctAnswer, currentTriviaIndex)
		},
		[currentTriviaIndex, setCurrentTrivia]
	)

	return (
		<WithWrapper>
			{isLoading && Loader()}
			{!isLoading && (
				<>
					<Typography type='headline'>{currentTrivia?.category}</Typography>
					<TriviaBody
						currentTrivia={currentTrivia}
						onDecoding={handleDecoding}
						onButtonPress={handleButtonPress}
					/>
					<Typography type='pagination'>{`${
						currentTriviaIndex + 1
					}/${triviasLength}`}</Typography>
				</>
			)}
		</WithWrapper>
	)
}
