import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import Loader from '../components/UI/Loader'
import { Typography } from '../components/UI/Typography'
import { WithWrapper } from '../components/UI/WithWrapper'

import { useTriviaApi } from '../hooks/triviaApi'

import Colors from '../constants/colors'

export default function ModalQuizScreen() {
	const { trivias, isLoading } = useTriviaApi()

	const [triviasLength, setTriviasLength] = useState(-1)
	const [currentTriviaIndex, setCurrentTriviaIndex] = useState(-1)
	const [currentTrivia, setCurrentTrivia] = useState({})

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

	console.log({ triviasLength })

	return (
		<WithWrapper>
			{isLoading && Loader()}
			{!isLoading && (
				<>
					<Typography type='headline'>{currentTrivia?.category}</Typography>
					<TriviaWrapper>
						{trivias?.results?.map(result => (
							<Typography type='body' key={Math.random()}>
								{result.category}
							</Typography>
						))}
					</TriviaWrapper>
					<Typography type='pagination'>1/10</Typography>
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
