import React, { ReactNode } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

enum Sizes {
	'body' = 16,
	'headline' = 48,
	'question' = 20,
}

interface TextsProps {
	children: ReactNode
	type: string
}

export const Texts = ({ children, type }: TextsProps) => {
	const size: number = Sizes[type as keyof typeof Sizes]

	return (
		<Container>
			<Span size={size}>{children}</Span>
		</Container>
	)
}

const Container = styled.View({
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
})

const Span = styled(Text)<{ props: { size: number } }>({
	fontSize: ({ size }): Number => size,
})
