import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const router = createBrowserRouter([
    {   path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu/>
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
