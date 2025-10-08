import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import BlogMain from "./Components/BlogMain";
import PageNotFound from "./Components/PageNotFound";
import RouteMain from "./Components/RouteMain";
import Home from "./Components/Home";

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
                    <Route path="/blog" element={<BlogMain />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
