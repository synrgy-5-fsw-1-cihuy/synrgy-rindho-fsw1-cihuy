import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
    error: null,
    records: [],
    filter: {
        date: "",
        time: "",
        capacity: ""
    }
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCars: (state, { payload }) => {
            state.records = payload
        },
        setFilter: (state, { payload }) => {
            let date = payload.date
            let time = payload.time
            let capacity = payload.capacity
            state.filter = {
                ...state.filter,
                date,
                time,
                capacity
            }
        },
        resetFilter: (state) => {
            state.filter = {
                date: "",
                time: "",
                capacity: ""
            }
        }
    },
})

export const { setCars, setFilter, resetFilter } = carsSlice.actions

export default carsSlice.reducer