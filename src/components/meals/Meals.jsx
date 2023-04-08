import styled from 'styled-components'
import { DUMMY_MEALS } from '../../common/utils'
import MealItem from './meal-item/MealItem'

const Meals = () => {
	return (
		<Card>
			{DUMMY_MEALS.map((meal) => {
				return (
					<MealItem
						key={meal.id}
						title={meal.title}
						description={meal.description}
						price={meal.price}
						id={meal.id}
					/>
				)
			})}
		</Card>
	)
}

export default Meals

const Card = styled.ul`
	background: #ffffff;
	border-radius: 16px;
	width: 70%;
	margin: 160px auto;
	padding: 40px 40px 16px 40px;
`
