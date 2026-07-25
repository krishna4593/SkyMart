import { createBrowserRouter } from "react-router";
import Login from "../features/auth/Page/Login";
import Register from "../features/auth/Page/Register";
import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Home from "../features/Home/Page/Home";
import Shop from "../features/Shop/Page/Shop";
import About from "../features/About/Page/About";
import { RouterProvider } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
    {       
        path: "/",
       element:<PublicRoute/>,
       children:[{
         path:"",
         element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
       }]
    },
    {
       path:"/home",
       element:<ProtectedRoute/>,
       children:[{
         path: "",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "about",
                element: <About />
            }
        ]
       }]
    }
])

const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes

