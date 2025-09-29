import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [

    route("service", "routes/serviceLayout.tsx", [
        route("technical", "routes/Techical/bigComponents/technicalLayout.tsx", [
            route("overview", "routes/Techical/bigComponents/overview.tsx"),
            route("signals", "routes/Techical/bigComponents/signals.tsx"),
        ]),
        route("fundamental", "routes/Fundamental/fundamentalLayout.tsx", [
            route("singleAnalysis", "routes/Fundamental/bigComponents/singleAnalysis.tsx"),
            route("autoAnalysis", "routes/Fundamental/bigComponents/autoAnalysis.tsx"),
        ]),
        route("sentiment", "routes/Sentiment/bigComponents/sentimentNavigation.tsx"),
        route("contact", "routes/Contact/bigComponents/contactLayout.tsx")
    ]),

] satisfies RouteConfig;

