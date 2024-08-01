import { Outlet } from 'react-router-dom';

import CampNav from '../Components/CampNav';

function CampListLayout() {
    return (
        <>
            <CampNav />
            <Outlet />
        </>
    );
}

export default CampListLayout;