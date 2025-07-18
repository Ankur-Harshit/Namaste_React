import React, {lazy, Suspense} from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Instamart from "./components/Instamart";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Instamart = lazy(()=> import("./components/Instamart"));

const AppLayout = () =>{
    return (
      <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
      </Provider>  
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
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
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/instamart",
        element:
        <Suspense fallback={<h1>Loading....</h1>}>
          <Instamart />
        </Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    element: <AppLayout />,
    errorElement: <Error />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);