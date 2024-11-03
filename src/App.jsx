import React, { useContext } from "react";
import Home from "./Layout/Home";
import Loader from "./Component/Loader";
import OrgContext from "./Context/OrgContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RoutLayout from "./Component/RoutLayout";
import AddToCart from "./Layout/AddToCart";
import Agents from "./Layout/Agents";
import Error from "./Component/Error";
import PropertyPage from "./Component/PropertyPage";
import BlogPage from "./page/BlogPage";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import SingUp from "./Component/SingUp";
import AddToFavourite from "./Component/AddToFavourite";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RoutLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Properties" element={<PropertyPage />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addToFavourite" element={<AddToFavourite />} />
          <Route path="/login" element={<Login className={`mt-[5vw]`} />} />
          <Route path="/singUp" element={<SingUp className={`mt-[3vw]`} />} />
          <Route path="/*" element={<Error />} />
        </Route>

      </Route>
    )
  );

  const { isLoading } = useContext(OrgContext)

  if (isLoading == true) {
    return <Loader />;
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
