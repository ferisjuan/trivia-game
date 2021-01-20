import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import QuizScreen from './screens/QuizScreen'
import ResultsScreen from './screens/ResultsScreen'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='HOME' component={HomeScreen} />
				<Stack.Screen name='QUIZ' component={QuizScreen} />
				<Stack.Screen name='RESULTS' component={ResultsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
