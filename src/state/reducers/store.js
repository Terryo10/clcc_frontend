import { configureStore } from '@reduxjs/toolkit'
import Auth_reducer from "./auth_reducer";

export const store = configureStore({
        reducer: {
            counter: Auth_reducer
        }
    }
)