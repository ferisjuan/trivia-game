import React, { useCallback, useEffect, useState } from 'react'
import { WithWrapper } from '../components/UI/WithWrapper'

import { NavigationProps } from '../navigation/screens'
import { Button } from '../components/UI/Button'
import { Typography } from '../components/UI/Typography'
import { useStoreActions } from '../store/hooks'

export default function HomeScreen({ navigation }: NavigationProps) {
	const resetTrivias = useStoreActions(actions => actions.trivia.resetTrivias)

	useEffect(() => {
		resetTrivias()
	}, [])

	const handleOpenModal = useCallback(() => {
		navigation.navigate('QUIZ_MODAL')
	}, [])

	return (
		<WithWrapper>
			<Typography type='headline'>Home Screen</Typography>
			<Button title='Trivia' cb={handleOpenModal} />
		</WithWrapper>
	)
}
