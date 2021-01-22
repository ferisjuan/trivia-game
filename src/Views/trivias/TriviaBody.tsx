import React from 'react'
import styled from 'styled-components/native'
import { Button } from '../../components/UI/Button'
import { Typography } from '../../components/UI/Typography'
import colors from '../../constants/colors'
import { ITriviaBody } from '../../interfases/ITriviaBody'

export default ({ currentTrivia, onDecoding, onButtonPress }: ITriviaBody) => {
	return (
		<>
			<TriviaWrapper>
				<Typography type='question'>
					{onDecoding(currentTrivia?.question as string)}
				</Typography>
				<Actions>
					<Button
						cb={() => onButtonPress('True')}
						title='True'
						disabled={false}
					/>
					<Button
						cb={() => onButtonPress('False')}
						title='False'
						disabled={false}
					/>
				</Actions>
			</TriviaWrapper>
		</>
	)
}

const TriviaWrapper = styled.View({
	flex: 1,
	backgroundColor: colors.WHITE,
	borderColor: colors.WHITE,
	borderRadius: 5,
	borderWidth: 5,
	margin: 5,
	padding: 10,
	width: '94%',
})

const Actions = styled.View({
	flex: 1,
	flexDirection: 'row',
})
