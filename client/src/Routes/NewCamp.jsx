import { useRouteLoaderData } from 'react-router-dom';
import CampForm from '../Components/CampForm';

const NewCamp = () => {
    const campDetails = useRouteLoaderData('campDetails');

    return <CampForm method='POST' camp={campDetails} />
}

export default NewCamp;

