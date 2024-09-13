import { useLoaderData, json, useLocation } from "react-router-dom";
import {useEffect} from 'react';
import CampsList from "../Components/CampsList";

const AllCampgrounds = () => {
    const campgrounds = useLoaderData();


    //USER FEEDBACK --> NEED TO FIX
    // const location = useLocation(); 
    // useEffect(() => {
    //     if (location.state && location.state.message) {
    //         window.alert(location.state.message);
    //     }
    // }, [location]);


    return <CampsList campgrounds={campgrounds} />
}

export default AllCampgrounds;


export const loader = async () => {
    const response = await fetch('https://tentsntrails.onrender.com/campgrounds');

    if (!response.ok) {
        //json creates response object with data in json format. don't need to parse later
        throw json({ message: 'could not fetch campgrounds' }, { status: 500 })
    }
    else {
        const campgrounds = await response.json();
        return campgrounds;
    }
}