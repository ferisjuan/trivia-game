import React from 'react'
import styled from 'styled-components/native'

interface ModalProps {
	title: String
	cb: Function
}

export const Button = ({ title, cb }: ModalProps) => {
	return (
		<Container>
			<BtnTouchable onPress={() => cb()}>
				<Title>{title}</Title>
			</BtnTouchable>
		</Container>
	)
}

const Container = styled.View({
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
})

const BtnTouchable = styled.TouchableOpacity({
	alignItems: 'center',
	backgroundColor: '#DDDDDD',
	padding: 10,
})

const Title = styled.Text({
	fontSize: 16,
})
