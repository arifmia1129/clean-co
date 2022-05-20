import About from "../pages/About/About";
import Services from "../pages/Services/Services";

export const privateRoutes = [
    { path: "/services", name: "services", Component: Services },
    { path: "/about", name: "about", Component: About },
]