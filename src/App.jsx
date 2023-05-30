import React from "react";
import Footer from "./components/Footer";
import Login from "./auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./auth/Dashboard";
import Search from "./auth/Search";

function App() {
    return (
        <div className="bg-zinc-900">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
