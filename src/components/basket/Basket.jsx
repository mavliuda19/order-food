import { Box, Modal, styled } from '@mui/material'
import { DUMMY_MEALS } from '../../common/utils'
import BasketItem from './BasketItem'
import TotalAmount from './TotalAmount'

const Basket = ({ onClose, open, items }) => {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 700,
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 4,
		borderRadius: '20px',
	}

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={style}>
				<StyledContainer>
					<FiwedHeightContainer>
						{DUMMY_MEALS.map((item) => {
							return (
								<BasketItem
									key={item._id}
									title={item.title}
									price={item.price}
									amount={item.amount}
								/>
							)
						})}
					</FiwedHeightContainer>
					<TotalAmount onClose={onClose} />
				</StyledContainer>
			</Box>
		</Modal>
	)
}

export default Basket

const FiwedHeightContainer = styled('div')(() => ({
	maxHeight: '228px',
	overflowY: 'scroll',
}))

const StyledContainer = styled('div')(({ theme }) => ({
	backgroundColor: '#fff',
	width: '100%',
	height: '100%',
	padding: '1.5rem 2rem',
}))
