import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const TotalAmount = ({ price, onClose, onOrder }) => {
	// const orderButton =
	// 	price > 0 ? <Button onClick={onOrder}>Order</Button> : null

	// const fixedPrice = price.toFixed(2)

	return (
		<Container>
			<InfoContainer>
				<Label>Total amount</Label>
				<Price>${77}</Price>
			</InfoContainer>

			<ActionButtonsContainer>
				<Button variant='outlined' onClick={onClose}>
					close
				</Button>
				{/* {orderButton} */}
			</ActionButtonsContainer>
		</Container>
	)
}

export default TotalAmount

const Label = styled('p')(() => ({
	fontWeight: '700',
	fontSize: '20px',
	lineHeight: '30px',
	textAlign: 'center',
	margin: 0,
}))

const Price = styled('p')(() => ({
	fontWeight: '600',
	fontSize: '22px',
	lineHeight: '33px',
	color: '#b4461a',
	margin: 0,
}))

const InfoContainer = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'space-between',
}))

const ActionButtonsContainer = styled('div')(() => ({
	marginTop: '24px',
	display: 'flex',
	justifyContent: 'flex-end',
	gap: '1rem',
}))

const Container = styled('div')(() => ({
	margin: '30px 0 0 0',
}))
