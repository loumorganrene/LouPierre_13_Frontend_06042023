import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, details: null },
    reducers: {
        setCredentials: (state, action) => {
            const { token } = action.payload.body
            state.token = token
        },
        setDetails: (state, action) => {
            state.details = action.payload
        },
        logout: (state, action) => {
            state.token = null
            state.details = null
        }
    },
})

export const { setCredentials, setDetails, logout } = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state) => state.auth.token