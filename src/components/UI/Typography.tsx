import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components/native'
import colors from '../../constants/colors'

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
			<Wording
				style={{
					color: type === 'question' ? colors.TEXT_PRIMARY : colors.WHITE,
					fontSize: size,
					fontWeight: weight,
				}}
			>
				{children}
			</Wording>
		</Container>
	)
}

const Container = styled.View({
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
})

const Wording = styled.Text({
	color: colors.WHITE,
})
