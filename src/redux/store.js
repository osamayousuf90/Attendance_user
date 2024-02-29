import { configureStore } from '@reduxjs/toolkit'
import modalActions from './slices/modalActions'

export const store = configureStore({
    reducer: {
        modalActions,
    },
})

export default store