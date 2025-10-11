import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShowScrollToTop from "./ShowScrollToTop";
import ScrollPage from "./ScrollPage";
function RouteMain() {


    return (
        <>
            <ScrollPage/>
            <ShowScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default RouteMain;
