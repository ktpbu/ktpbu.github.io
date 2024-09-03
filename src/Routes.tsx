import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { Contact, Home, Rush, Members, HackKTP, AboutKTP, NotFound, PrivacyPolicy } from './pages';
import { Navbar } from "./components/navbar";
import {Footer} from "./components/footer";

export const Navigation = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rush" element={<Rush />} />
                <Route path="/members" element={<Members />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/hackktp" element={<HackKTP />} />
                <Route path="/aboutktp" element={<AboutKTP />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </Router>
    )
}