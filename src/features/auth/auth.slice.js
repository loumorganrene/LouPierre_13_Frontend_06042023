import { createSlice } from '@reduxjs/toolkit'
const persistStatus = localStorage.getItem('persist')
const persistToken = localStorage.getItem('token')
const persistUser = localStorage.getItem('details')

const authSlice = createSlice({
    name: 'auth',
    initialState: { persist: persistStatus, token: persistToken , details: persistUser || null },
    reducers: {
        setPersist: (state, action) => {
            state.persist = "true"
        },
        setCredentials: (state, action) => {
            const { token } = action.payload.body
            state.token = token
        },
        setDetails: (state, action) => {
            const { body } = action.payload
            state.details = body
            if (state.persist === "true") {
                localStorage.setItem('token', state.token)
                localStorage.setItem('details', JSON.stringify(state.details))
            }
        },
        logout: (state, action) => {
            state.token = null
            state.details = null
            state.persist = null
            localStorage.clear()
        }
    },
})

export const { setPersist, setCredentials, setDetails, logout } = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state) => state.auth.token
export const selectPersistState = (state) => state.auth.persist