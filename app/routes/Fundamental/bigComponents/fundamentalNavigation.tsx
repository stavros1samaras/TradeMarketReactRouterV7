import { Link } from "react-router";


export default function FundamentalNavigation() {
    return (
        <nav className="block">
            <ul className="flex flex-row justify-between">
                <li><Link to="singleAnalysis">SingleAnalysis</Link></li>
                <li><Link to="autoAnalysis">AutoAnalysis</Link></li>
            </ul>
        </nav>
    )
}