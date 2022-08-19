import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
export default function Header() {
    return (
        <>
            <div className='n'>
                <nav>
                    <div className='container'>
                    <div class="column">
                        <h4>
                            STYLES<br />CONFERENCE
                        </h4>
                    </div>
                    <ul class="nav-links">
                        <section>
                            <h4>August 24–26th — Chicago, IL</h4>
                            <li><a href="/" id="a">Home</a></li>
                            <li><a href="/speakers" id="a">Speakers</a></li>
                          
                            <li><a href="/venue" id="a">Venue</a></li>
                            <li><a href="/schedule" id="a">Schedule</a></li>
                            <li><a href="/register" id="a">Register</a></li>
                        </section>
                    </ul>
                    </div>
                </nav>
                <nav>
                    <div className="info container">
                        <h2>Dedicated to the Craft of Building Websites</h2>
                        {/* <h3>Every year the brightest web designers and front-end developers descend on</h3>

                        <h3>Chicago to discuss the latest tech logies. Join us this August!
                        </h3> */}
                        <button class="btn" type="submit"><a href="/register" id="a">Register Now</a></button>
                    </div>
                </nav>


            </div>
        </>
    )
}