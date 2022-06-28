import { configureStore } from '@reduxjs/toolkit'
import Auth_reducer from "./auth_reducer";
import SidebarReducer from "./sidebar_reducer";

export const store = configureStore({
        reducer: {
            auth: Auth_reducer,
            sidebar :SidebarReducer
        }
    }
)