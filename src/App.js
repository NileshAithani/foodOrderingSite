import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import RestuarantMenu from "./components/RestaurantMenu";
import UserContext from "./config/UserContext";
import { appStore } from "./config/appStore";
import {Provider} from 'react-redux';


const ContactUs = lazy(() => import("./components/ContactUs"));

const Applayout = () => {
  


const [username , setUsername ] = useState();


  //Authentication
  useEffect(()=>{
    const data = {
      name : "Nilesh Aithani"
    };

    setUsername(data.name);
  },[])


  return (

    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : username , setUsername}}>
    
    <div className="max-w-screen-2xl flex flex-col gap-10">
      {/* Header */}
      <Header />
      {/* Body  */}
      <Outlet />
      {/* Footer */}
      {/* <Footer/> */}
    </div>
   

    </UserContext.Provider>
    </Provider>

  );
};



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestuarantMenu />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
             <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
