import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
}

export const mealsSlice = createSlice({
	name: 'meals',
	initialState,
	reducers: {
		addToBasket(state, action) {
			state.items.push(action.payload)
		},
	},
})

export const mealsSliceActions = mealsSlice.actions
