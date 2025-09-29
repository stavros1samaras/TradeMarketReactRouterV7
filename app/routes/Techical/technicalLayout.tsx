import { Outlet } from 'react-router';
import TechnicalNavigation from './bigComponents/technicalNavigation';


export default function technicalLayout() {
    return (
        <>
            <TechnicalNavigation />
            <Outlet />
        </>
    )
}

