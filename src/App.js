import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import RestuarantMenu from "./components/RestaurantMenu";
import UserContext from "./config/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

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
    <UserContext.Provider value={{loggedInUser : username , setUsername}}>
    <div className="max-w-screen-2xl flex flex-col gap-10">
      {/* Header */}
      <Header />
      {/* Body  */}
      <Outlet />
      {/* Footer */}
    </div>
    </UserContext.Provider>
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
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestuarantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
