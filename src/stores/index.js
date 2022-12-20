import { configureStore } from '@reduxjs/toolkit'
import carsReducer from './slices/cars'

const rootStore = preloadedState => configureStore({
    reducer: {
        cars: carsReducer
    },
    preloadedState: preloadedState
})

export default rootStore
