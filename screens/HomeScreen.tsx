import React from 'react'
import { Modal } from '../components/UI/Modal'

import { NavigationProps } from '../navigation/screens'
import { Button } from '../components/UI/Button'
import { Texts } from '../components/UI/Texts'

export default function HomeScreen({ navigation }: NavigationProps) {
	const handleOpenModal = () => navigation.navigate('QUIZ_MODAL')
	return (
		<Modal>
			<Texts type='headline'>Home Screen</Texts>
			<Button title='Trivia' cb={handleOpenModal} />
		</Modal>
	)
}
