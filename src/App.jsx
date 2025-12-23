import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import PageNotFound from "./Components/PageNotFound";
import RouteMain from "./Components/RouteMain";
import Home from "./Components/Home";
import BlogContainer from "./Components/BlogContainer";
import Blogpage from "./Components/Blogpage";

function App() {
    // const router = createBrowserRouter(createRoutesFromElements(
    //   <>

    //     <Route path="/" element={<Navigate to="/main" replace />} />
    //     <Route path="/main" element={<Homepage />} />
    //     <Route path="*" element={<Homepage />} />
    //   </>
    // ))

    return (
        <>
            {/* <RouterProvider router={router} /> */}
            <Routes>
                <Route element={<RouteMain />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<BlogContainer />} />

                    <Route path="/blog/:slug" element={<Blogpage />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
