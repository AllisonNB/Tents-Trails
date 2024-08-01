import { NavLink } from 'react-router-dom';
import classes from './CampNav.module.css';

export default function CampNav() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/campgrounds"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            All Camps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/campgrounds/new"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            New Camp
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}