import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

    const { state, logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 mb-4">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ (param) => `nav-item nav-link ${param.isActive ? 'active' : ''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ (param) => `nav-item nav-link ${param.isActive ? 'active' : ''}` }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ (param) => `nav-item nav-link ${param.isActive ? 'active' : ''}` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-primary">{ state.user?.name }</span>

                    <NavLink 
                        className={ (param) => `nav-item nav-link ${param.isActive ? 'active' : ''}` } 
                        to="/login"
                        onClick={logout}
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
