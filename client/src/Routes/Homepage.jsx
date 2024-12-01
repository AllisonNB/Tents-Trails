import {Link} from "react-router-dom";
import classes from './Homepage.module.css';
import { useState } from "react";
import Alert from "../Components/Alert";

const Homepage = () => {

const [showAlert, setShowAlert] = useState(true);

const hideAlert = () => {
    setShowAlert(false); //only needs to show on initial load
}

    return (
        <div className={classes.title}>
            <h1>Welcome to Tents & Trails! </h1>
            <p>Check out your friend`&apos`s reviews of the latest backcountry camping routes in Algonquin Park</p>
            {showAlert && <Alert hideAlert={hideAlert}/>}
            <Link to='/campgrounds'>Enter</Link>
        </div>
    )
}

export default Homepage
