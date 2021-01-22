import React, { ReactElement, ReactNode } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import { Sizes, Weights } from '../../enums/TextEnum'

interface TextsProps {
	children: ReactNode | ReactElement
	type: string
}

export const Typography = ({ children, type }: TextsProps) => {
	const size = Sizes[type as keyof typeof Sizes]
	const weight = Weights[type as keyof typeof Weights]

	return (
		<Container>
			<Text style={{ fontSize: size, fontWeight: weight }}>{children}</Text>
		</Container>
	)
}

const Container = styled.View({
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
})
