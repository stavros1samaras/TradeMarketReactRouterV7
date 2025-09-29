import { Outlet } from 'react-router';
import FundamentalNavigation from './bigComponents/fundamentalNavigation';

export default function FundamentalLayout() {
    return (
        <div>
            <FundamentalNavigation />
            <Outlet />
        </div>
    )
}