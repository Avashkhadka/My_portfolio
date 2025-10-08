import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShowScrollToTop from "./ShowScrollToTop";
function RouteMain() {
    return (
        <>
            <ShowScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default RouteMain;
