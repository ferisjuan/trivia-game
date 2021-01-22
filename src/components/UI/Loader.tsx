import React from 'react'
import { Plane } from 'react-native-animated-spinkit'
import styled from 'styled-components/native'
import colors from '../../constants/colors'

export default () => {
	return (
		<Container>
			<Plane color={colors.WHITE} size={48} />
		</Container>
	)
}
const Container = styled.View({
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
})
