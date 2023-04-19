import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})



// import { authReducer } from '../features/auth/auth.reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const reducer = combineReducers({
//   auth: authReducer,
// })

// export const store = createStore(reducer, composeWithDevTools() )

// console.log("Premier state:");
// console.log(store.getState());

// store.subscribe(() => {
//   console.log("Nouveau state:");
//   console.log(store.getState());
// });

