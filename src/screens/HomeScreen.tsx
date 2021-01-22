import React, { useCallback, useState } from 'react'
import { WithWrapper } from '../components/UI/WithWrapper'

import { NavigationProps } from '../navigation/screens'
import { Button } from '../components/UI/Button'
import { Typography } from '../components/UI/Typography'

export default function HomeScreen({ navigation }: NavigationProps) {
	const handleOpenModal = useCallback(() => {
		navigation.navigate('QUIZ_MODAL')
	}, [])

	return (
		<WithWrapper>
			<Typography type='headline'>Home Screen</Typography>
			<Button disabled={false} title='Trivia' cb={handleOpenModal} />
		</WithWrapper>
	)
}
