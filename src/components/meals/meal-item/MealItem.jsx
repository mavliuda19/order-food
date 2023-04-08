import React from 'react'
import styled from 'styled-components'
import MealItemForm from './MealItemForm'

const MealItem = ({ title, description, price, id }) => {
	return (
		<StyledItem>
			<StyledItemInfo>
				<StyledTitle>{title}</StyledTitle>
				<StyledText>{description}</StyledText>
				<span>${price}</span>
			</StyledItemInfo>
			<MealItemForm id={id} title={title} price={price} />
		</StyledItem>
	)
}

export default MealItem

const StyledItem = styled.li`
	list-style: none;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #d6d6d6;
	margin-bottom: 24px;
	:last-child {
		border: none;
		margin-bottom: 0;
	}
`
const StyledItemInfo = styled.div`
	margin-bottom: 20px;
	span {
		font-weight: 700;
		font-size: 20px;
		line-height: 30px;
		color: #ad5502;
	}
`
const StyledTitle = styled.h4`
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	color: #222222;
`
const StyledText = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #222222;
	margin: 4px 0;
	font-style: italic;
`
