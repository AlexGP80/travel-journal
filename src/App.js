import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import data from "./data"

export default function App() {
    return (
        <>
            <Navbar />
            <Main 
                data = {data}
            />
        </>
    );
}