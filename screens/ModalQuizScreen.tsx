import React from 'react'
import { View, Text } from 'react-native'
import { useTriviaApi } from '../hooks/triviaApi'

export default function ModalQuizScreen() {
	const { trivias } = useTriviaApi()

	return (
		<View>
			{trivias?.results?.map(result => (
				<Text key={Math.random()}>{result.category}</Text>
			))}
		</View>
	)
}
