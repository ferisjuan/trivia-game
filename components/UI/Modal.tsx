import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

interface ModalProps {
	children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
	return <ModalView>{children}</ModalView>
}

const ModalView = styled.View({
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
})
