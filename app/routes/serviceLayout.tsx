import { Outlet } from 'react-router';
import ServiceNavigation from './serviceNavigation';

export default function ServiceLayout() {
    return (
        <>
            <div>ServiceLayout</div>
            <ServiceNavigation />
            <div className='outlet'>
                <Outlet />
            </div>

        </>
    )
}