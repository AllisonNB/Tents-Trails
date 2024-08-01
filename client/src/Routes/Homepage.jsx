import {Link} from "react-router-dom";
import classes from './Homepage.module.css';

const Homepage = () => {
    return (
        <div className={classes.title}>
            <h1>Welcome to Tents & Trails! </h1>
            <p>Check out your friend's reviews of the latest backcountry camping routes in Algonquin Park</p>
            <Link to='/campgrounds'>Enter</Link>
        </div>
    )
}

export default Homepage
