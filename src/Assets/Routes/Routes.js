import HomePage from "../../Pages/HomePage/HomePage";
import Legends from "../../Pages/Legends/Legends";
import About from "../../Pages/About/About";
import CeatePost from "../../Pages/CreatePost/CeatePost";
import UpdatePost from "../../Pages/UpdatePost/UpdatePost";
import Login from "../../Pages/Login/Login";
export const Routes = [
    {
        id: 1,
        component: HomePage,
        path: "/",
        exact: true,
    },
    {
        id: 2,
        component: Legends,
        path: "/legends",
        exact: true,
    },
    {
        id: 3,
        component: About,
        path: "/about",
        exact: true,
    },
    {
        id: 4,
        component: Login,
        path: "/login",
        exact: true,
    },
    {
        id: 5,
        component: CeatePost,
        path: "/profile",
        exact: true,
    },
    {
        id: 6,
        component: UpdatePost,
        path: "/UpdatePost",
        exact: true,
    },
    {
        id: 6,
        component: Login,
        path: "/login",
        exact: true,
    },
];