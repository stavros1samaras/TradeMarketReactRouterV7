import { Link } from "react-router";

export default function TechnicalNavigation() {
    return (
        <nav className="block">
            <ul className="flex flex-row justify-between">
                <li><Link to="overview">overview</Link></li>
                <li><Link to="signals">Signals</Link></li>
                <li><Link to="/">item3</Link></li>
            </ul>
        </nav>
    );
}

