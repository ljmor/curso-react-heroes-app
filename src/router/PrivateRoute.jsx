import { useContext } from "react"
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const { state } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastpath', lastPath);

    return (state.logged) ? children : <Navigate to={'/login'} />
}
