import React from 'react'
import Button from '../../UI/Button'
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus-icon.svg'
import styled from 'styled-components'

const MealItemForm = ({ id }) => {
	return (
		<StyledForm>
			<InputContainer>
				<label htmlFor={id}>Amount</label>
				<StyledInput
					type='number'
					id={id}
					min={1}
					defaultValue={1}
					max={5}
				/>
			</InputContainer>
			<Button>
				<StyledIcon /> Add
			</Button>
		</StyledForm>
	)
}

export default MealItemForm

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`
const InputContainer = styled.div`
	margin-bottom: 12px;
	label {
		font-weight: 600;
		font-size: 18px;
		line-height: 27px;
		color: #222222;
	}
`
const StyledInput = styled.input`
	border: 1px solid #d6d6d6;
	border-radius: 6px;
	width: 60px;
	height: 32px;
	margin-left: 20px;
	outline: none;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #222222;
	padding: 4px 12px;
`
const StyledIcon = styled(PlusIcon)`
	margin-right: 10px;
`
