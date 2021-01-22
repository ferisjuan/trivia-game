import React from 'react'
import Spinner from 'react-native-spinkit'
import styled from 'styled-components'
import colors from '../../constants/colors'

//types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],

export default function Loader() {
	return (
		<>
			<LoadingSpinner type='9CubeGrid' />
		</>
	)
}

var LoadingSpinner = styled(Spinner)({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.PRIMARY_DARK,
	},

	spinner: {
		marginBottom: 50,
	},

	btn: {
		marginTop: 20,
	},

	text: {
		color: 'white',
	},
})
