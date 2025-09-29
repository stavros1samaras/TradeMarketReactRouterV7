import { Outlet } from 'react-router'
import TechnicalNavigation from './technicalNavigation'

export default function TechnicalLayout() {
    return (
        <div>
            <TechnicalNavigation />
            <Outlet />
        </div>
    )
}