import React, { ReactNode } from 'react'
import styled from 'styled-components/native'
import colors from '../../constants/colors'

interface ModalProps {
	children: ReactNode
}

export const WithWrapper = ({ children }: ModalProps) => {
	return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.View({
	flex: 1,
	alignItems: 'center',
	justifyContent: 'flex-start',
	backgroundColor: colors.PRIMARY_DARK,
})
