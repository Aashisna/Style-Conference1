import React from 'react';
export default function Footer() {
    return (
        <>
            <div id="main-footer">
                <div className="footer container">
                    <p>&copy; Styles Conference</p>
                    <ul class="nav-linkss py-5">
                        <li><a href="/" id="a">Home</a></li>
                        <li><a href="/speakers" id="a">Speakers</a></li>
                        <li><a href="/venue" id="a">Venue</a></li>
                        <li><a href="/schedule" id="a">Schedule</a></li>
                        <li><a href="/register" id="a">Register</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
