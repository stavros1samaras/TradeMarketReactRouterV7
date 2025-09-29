import { Link } from "react-router";

export default function ServiceNavigation() {
    return (
        <nav className="flex flex-row justify-between sticky top-0 bg-white z-10">
            <div className="flex flex-row justify-start gap-[10px]">
                <h1>SAMOKO</h1>
                <ul className="flex flex-row justify-between gap-[10px]">
                    <li><Link to="/service/technical/overview">Techical</Link></li>
                    <li><Link to="/service/fundamental/singleAnalysis">Fundamental</Link></li>
                    <li><Link to="/service/sentiment">Sentiment</Link></li>
                    <li><Link to="/service/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

