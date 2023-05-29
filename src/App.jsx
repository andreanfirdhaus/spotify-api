import React from "react";
import Footer from "./components/Footer";
import Login from "./auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./auth/Dashboard";

function App() {
    return (
        <div className="bg-zinc-900">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
