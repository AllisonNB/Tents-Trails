import { Outlet } from 'react-router-dom';

import CampNav from '../Components/CampNav';

function CampRootLayout() {
    return (
        <>
            <CampNav />
            <Outlet />
        </>
    );
}

export default CampRootLayout;