import { configureStore } from '@reduxjs/toolkit'
import { mealsSlice } from './meals/MealsSlice'

const store = configureStore({
	reducer: {
		[mealsSlice.name]: mealsSlice.reducer,
	},
})

export default store
