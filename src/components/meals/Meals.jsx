import styled from 'styled-components'
import MealItem from './meal-item/MealItem'

export const DUMMY_MEALS = [
	{
		id: 'meal1',
		title: 'Sushi',
		description: 'Finest fish and veggies',
		price: 22.99,
	},
	{
		id: 'meal2',
		title: 'Schnitzel',
		description: 'A german specialty!',
		price: 16.0,
	},
	{
		id: 'meal3',
		title: 'Barbecue Burger',
		description: 'American, raw, meaty',
		price: 12.99,
	},
	{
		id: 'meal4',
		title: 'Green Bowl',
		description: 'Healthy...and green...',
		price: 19.99,
	},
]

const Meals = () => {
	return (
		<Card>
			{DUMMY_MEALS.map((meal) => {
				return (
					<MealItem
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
