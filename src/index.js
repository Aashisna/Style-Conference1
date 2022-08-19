import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import './Style.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Schedule from './Schedule';
import Speakers from './Speakers';
import Venue from './Venue';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/venue" element={<Venue />} />
                <Route path="/register" element={<Register />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/speakers" element={<Speakers />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </React.StrictMode>
);

reportWebVitals();
