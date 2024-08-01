import { useRouteLoaderData } from 'react-router-dom';

import CampForm from '../Components/CampForm';

const EditCamp = () => {
    const campDetails = useRouteLoaderData('campDetails');

    return <CampForm method="PATCH" camp={campDetails} />
}

export default EditCamp
