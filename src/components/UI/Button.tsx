import React from 'react'
import styled from 'styled-components/native'

interface ModalProps {
	title: string
	disabled: boolean
	cb: Function
}

export const Button = ({ title, disabled, cb }: ModalProps) => {
	return (
		<Container>
			<Touchable disabled={disabled} onPress={() => cb()}>
				<Title>{title}</Title>
			</Touchable>
		</Container>
	)
}

const Container = styled.View({
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
})

const Touchable = styled.TouchableOpacity<{ disabled: boolean }>({
	alignItems: 'center',
	backgroundColor: '#DDDDDD',
	padding: 10,
})

const Title = styled.Text({
	fontSize: 16,
})
