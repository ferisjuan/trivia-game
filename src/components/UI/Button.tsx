import React from 'react'
import styled from 'styled-components/native'
import colors from '../../constants/colors'

interface ModalProps {
	title: string
	cb: Function
}

export const Button = ({ title, cb }: ModalProps) => {
	return (
		<Container>
			<Touchable onPress={() => cb()}>
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

const Touchable = styled.TouchableOpacity({
	alignItems: 'center',
	backgroundColor: colors.ACCENT,
	borderColor: colors.TEXT_SECONDARY,
	borderWidth: 1,
	borderRadius: 2,
	minWidth: 100,
	padding: 10,
})

const Title = styled.Text({
	color: colors.WHITE,
	fontSize: 20,
})
