import produce from "immer";
import { requestLogin, successLogin, failureLogin, actionLogout } from "./auth.actions";

const authState = {
    status: 'void',
    isLoggedIn: false,
    token: null,
    error: null,
}

export const authReducer = (state = authState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case requestLogin: {
                if (draft.status === 'void') {
                    draft.status = 'pending'
                    return
                }
                if (draft.status === 'rejected') {
                    draft.status = 'pending'
                    draft.error = null
                    return
                }
                if (draft.status === 'resolved') {
                    draft.status = 'updating'
                    return
                }
                return
            }

            case successLogin: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.status = 'resolved'
                    draft.token = action.payload
                    return
                }
                return
            }

            case failureLogin: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.status = 'rejected'
                    draft.token = null
                    draft.error = action.payload
                    return
                }
                return
            }

            case actionLogout: {
                    draft.status = 'void'
                    draft.isLoggedIn = false
                    draft.token = null
                    draft.error = null
                    return
                }
                
            default:
                return
        }
    })

}
