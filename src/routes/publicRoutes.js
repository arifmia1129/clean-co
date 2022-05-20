import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Authentication/Login";

export const publicRoutes = [
    { path: "/", name: "home", Component: Home },
    // { path: "/about", name: "about", Component: About },
    { path: "/contact", name: "contact", Component: Contact },
    { path: "/login", name: "login", Component: Login },
]