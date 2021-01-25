import React from 'react'

import { useStoreState } from '../../store/hooks'

import { Typography } from '../../components/UI/Typography'
import { WithWrapper } from '../../components/UI/WithWrapper'

export const ScoreView = () => {
	const score = useStoreState(state => state.game.score)
	return (
		<WithWrapper>
			<Typography type='headline'>You Scored: {score}</Typography>
		</WithWrapper>
	)
}
