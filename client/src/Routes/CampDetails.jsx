import { useRouteLoaderData, json, redirect } from 'react-router-dom';

import Campsite from "../Components/Campsite"

const CampDetails = () => {
    const campDetails = useRouteLoaderData('campDetails');

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


export const action = async ({params}) => {
    const id = params.campid;
    const response = await fetch(`http://localhost:4500/campgrounds/${id}` ,{
        method: 'DELETE', 
    });

    if (!response.ok) {
        throw json({ message: `couldn't delete campsite` }, { status: 500 });
    }

    return redirect('/campgrounds')
}