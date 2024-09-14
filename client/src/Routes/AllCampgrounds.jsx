import { useLoaderData, json } from "react-router-dom";
import CampsList from "../Components/CampsList";

const serverURL = import.meta.env.VITE_serverURL;

const AllCampgrounds = () => {
    const campgrounds = useLoaderData();

    return <CampsList campgrounds={campgrounds} />
}

export default AllCampgrounds;


export const loader = async () => {
    const response = await fetch(`${serverURL}/campgrounds`);

    if (!response.ok) {
        //json creates response object with data in json format. don't need to parse later
        throw json({ message: 'could not fetch campgrounds' }, { status: 500 })
    }
    else {
        const campgrounds = await response.json();
        return campgrounds;
    }
}