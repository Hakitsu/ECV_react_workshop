import { createSlice } from '@reduxjs/toolkit'

export const cityFav = createSlice({
    name: 'nameCity',
    initialState: {
        listOfCity: []
    },
    reducers: {
        addFav: (state, action) => {
            state.listOfCity.push(action.payload)
        },
        removeFav: (state, action) => {
            
        }
    } 
})

export const { addFav } = cityFav.actions;

export default cityFav.reducer;