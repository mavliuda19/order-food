import { useState } from 'react'
import Basket from './components/basket/Basket'
import Meals from './components/meals/Meals'
import Summary from './components/summary/Summary'
import Header from './layout/header/Header'

function App() {
	const [showBasket, setShowBasket] = useState(false)

	const onShowBasket = () => {
		setShowBasket(true)
	}
	const closeBasket = () => {
		setShowBasket(false)
	}
	return (
		<div>
			<Header onShowBasket={onShowBasket} />
			<Basket open={showBasket} onClose={closeBasket} />
			<Summary />
			<Meals />
		</div>
	)
}

export default App
