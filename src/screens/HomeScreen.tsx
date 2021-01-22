import React, { useCallback, useState } from 'react'
import { WithWrapper } from '../components/UI/WithWrapper'

import { NavigationProps } from '../navigation/screens'
import { Button } from '../components/UI/Button'
import { Typography } from '../components/UI/Typography'

export default function HomeScreen({ navigation }: NavigationProps) {
	const [isDisabled, setIsDisabled] = useState(false)

	const handleOpenModal = useCallback(() => {
		setIsDisabled(true)
		navigation.navigate('QUIZ_MODAL')
	}, [])
	return (
		<WithWrapper>
			<Typography type='headline'>Home Screen</Typography>
			<Button disabled={isDisabled} title='Trivia' cb={handleOpenModal} />
		</WithWrapper>
	)
}
