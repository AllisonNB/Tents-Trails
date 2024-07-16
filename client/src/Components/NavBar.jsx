import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';


function NavBar() {
    return (
        <header className={classes.header}>
            <h1>Tents&Trails</h1>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end //only active is path ends with just a slash
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/campgrounds"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            Campgrounds
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default NavBar;