import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Authentication/Login";

export const publicRoutes = [
    { path: "/", name: "home", Componotent: Home },
    { path: "/about", name: "about", Componotent: About },
    { path: "/services", name: "services", Componotent: Services },
    { path: "/contact", name: "contact", Componotent: Contact },
    { path: "/login", name: "login", Componotent: Login },
]