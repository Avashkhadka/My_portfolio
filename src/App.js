import "./App.css";
import React from "react";
import Homepage from "./Homepage";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router";
import Errorpage from "./components/Errorpage";
import { Routes } from "react-router";




function App() {
  // const router = createBrowserRouter(createRoutesFromElements(
  //   <>

  //     <Route path="/" element={<Navigate to="/main" replace />} />
  //     <Route path="/main" element={<Homepage />} />
  //     <Route path="*" element={<Homepage />} />
  //   </>
  // ))
  return (
    <React.Fragment>
      {/* <RouterProvider router={router} /> */}
      <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<Homepage />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;

