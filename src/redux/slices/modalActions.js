import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modal: "",
}

export const modalActions = createSlice({
    name: 'modalActions',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.modal = action.payload
        },
    },
})

export const { setModal } = modalActions.actions

export default modalActions.reducer