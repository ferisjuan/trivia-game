import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './screens/HomeScreen'
import ModalQuizScreen from './screens/ModalQuizScreen'
import ResultsScreen from './screens/ResultsScreen'

import { Stack } from './navigation/screens'

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='HOME' component={HomeScreen} />
				<Stack.Screen name='QUIZ_MODAL' component={ModalQuizScreen} />
				<Stack.Screen name='RESULTS' component={ResultsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
