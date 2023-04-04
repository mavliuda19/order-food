import React, { memo } from 'react'
import BackgroundImg from '../../assets/images/main-img.png'
import { styled } from '@mui/material'
import SummaryInfoCard from './SummaryInfoCard'

const Summary = () => {
	return (
		<Container>
			<StyledImg src={BackgroundImg} alt='summary' />
			<SummaryInfoCard />
		</Container>
	)
}

export default memo(Summary)

const Container = styled('div')(() => ({
	margin: 0,
	height: '27.5625rem',
}))
const StyledImg = styled('img')(() => ({
	height: '100%',
	width: '100%',
}))
