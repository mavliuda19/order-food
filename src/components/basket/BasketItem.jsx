import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const BasketItem = ({
	title,
	price,
	amount,
	decrementAmount,
	incrementAmount,
}) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Content>
				<PriceAndAmountContainer>
					<Price>${price}</Price>
					<Amount>x{amount}</Amount>
				</PriceAndAmountContainer>
				<CounterContainer>
					<Button variant='outlined' onClick={decrementAmount}>
						<RemoveIcon />
					</Button>
					<Button variant='outlined' onClick={incrementAmount}>
						<AddIcon />
					</Button>
				</CounterContainer>
			</Content>
		</Container>
	)
}

export default BasketItem

const Container = styled('div')(() => ({
	padding: '24px 10px',
	width: '100%',
	borderBottom: '3px solid #d6d6d6',
	'&:last-child': {
		border: 'none',
	},
}))

const Title = styled('p')(() => ({
	margin: '0 0 5px 0',
	fontWeight: '600',
	fontSize: '20px',
	lineHeight: ' 30px',
}))

const Price = styled('p')(() => ({
	margin: '0',
	fontWeight: '600',
	fontSize: '18px',
	lineHeight: '27px',
	color: '#b4461a',
}))

const Amount = styled('span')(() => ({
	border: '1px solid #d6d6d6',
	borderRadius: ' 6px',
	fontWeight: '500',
	fontSize: '16px',
	linHeight: '24px',
	padding: '6px 14px',
	display: 'block',
}))

const PriceAndAmountContainer = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '153px',
}))

const CounterContainer = styled('div')(() => ({
	display: 'flex',
	gap: '14px',
}))

const Content = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}))
