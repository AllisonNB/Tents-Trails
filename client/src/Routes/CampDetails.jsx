import { useLoaderData, json } from 'react-router-dom';

import Campsite from "../Components/Campsite"

const CampDetails = () => {
    const campDetails = useLoaderData();

    return (
        <Campsite details={campDetails} />
    )
}

export default CampDetails


//loader gets object with req & params properties
export const loader = async ({ params }) => {
    const id = params.campid;
    const response = await fetch(`http://localhost:4500/campgrounds/${id}`)

    if (!response.ok) {
        throw json({ message: `couldn't retrieve campsite details` }, { status: 500 })
    } else {
        return response;
    }
}