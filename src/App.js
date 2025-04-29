import "./App.css";
import React from "react";
import Homepage from "./Homepage";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router";
import Errorpage from "./components/Errorpage";




function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/main" element={<Homepage />}/>
      <Route path="*" element={<Errorpage/>}/>
    </>
  ))
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;

