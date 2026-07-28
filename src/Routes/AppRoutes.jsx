import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
const Login = lazy(() => import("../features/auth/Page/Login"));
const Register = lazy(() => import("../features/auth/Page/Register"));
const Home = lazy(() => import("../features/Home/Page/Home"));
const Shop = lazy(() => import("../features/Shop/Page/Shop"));
const About = lazy(() => import("../features/About/Page/About"));
const ProductsDetail = lazy(() => import("../features/Shop/Page/ProductsDetail"));
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Loader from "../Components/Loader";

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
                element: (<Suspense fallback={<Loader />}>
                        <Login />
                        </Suspense>
                        )
            },
            {
                path: "register",
                element: (<Suspense fallback={<Loader />}>
                        <Register />
                        </Suspense>
                        )
            }
        ]
       }]
    },
    {
       path:"/home",
      element:<ProtectedRoute/>,
      children:[{   

        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (<Suspense fallback={<Loader />}>
                        <Home />
                        </Suspense>
                        )
            },
            {
                path: "shop",
                element: (<Suspense fallback={<Loader />}>
                        <Shop />
                        </Suspense>
                        )
            },
            {
                path: "shop/:id",
                element: (<Suspense fallback={<Loader />}>
                        <ProductsDetail />
                        </Suspense>
                        )
            },
            {
                path: "about",
                element: (<Suspense fallback={<Loader />}>
                        <About />
                        </Suspense>
                        )
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

