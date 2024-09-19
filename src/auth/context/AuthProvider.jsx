import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types";

const init = () => {
    const user = JSON.parse(localStorage.getItem('my_user'));

    if (user === null) {
        return {
            logged: false
        }
    }

    return {
        logged: true,
        user: user
    }
    
};

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(authReducer, {}, init);
    
    const login = (name = '') => {

        const user =  {
            id: 1,
            name: name
        }
        
        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('my_user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () => {

        localStorage.removeItem('my_user');
        const action = {
            type: types.logout
        };

        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{
            login: login,
            logout: logout,
            state
        }}>
            { children }
        </AuthContext.Provider>
    )
}
