import PriceChart from '../smallComponents/priceChart'

import type { Route } from "./+types/overview";

export async function loader() {
    const url: string = `http://127.0.0.1:8000/ta/data/prices?ticker=BTC-USD&start=2020-07-05&end=2025-09-12&interval=1d`;

    const response: Response = await fetch(url);
    const result = await response.json();
    // console.log(result["BTC-USD"]);

    return (result["BTC-USD"]);
}


export default function overview({ loaderData }: Route.ComponentProps) {
    return (
        <>
            <h2>Bit Price Overview</h2>
            <PriceChart chartData={loaderData}/>
        </>
    )
}