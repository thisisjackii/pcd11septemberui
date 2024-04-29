import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Uploaded from "./pages/UploadedPage/Uploaded";
import Histogram from "./components/features/Histogram";
import Layout from "./components/common/Layout";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <div className="container-fluid">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <Home />
                            </Layout>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Layout>
                                <About />
                            </Layout>
                        }
                    />
                    <Route
                        path="/histogram"
                        element={
                            <Layout>
                                <Histogram />
                            </Layout>
                        }
                    />
                    <Route
                        path="/uploaded"
                        element={
                            <Layout>
                                <Uploaded />
                            </Layout>
                        }
                    />
                    {/* Add routes for other components */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
