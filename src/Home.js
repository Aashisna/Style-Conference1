import React from 'react';
import speakers from './speakers.jpg';
import schedule from './schedule.jpg';
import venue from './venue.jpg';
export default function Home() {
    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <h4 className=' text-center text-primary'>SPEAKERS</h4>
                    <img src={speakers} className='d-block w-100 img-fluid' alt="slide1" />
                    <a href="/speakers" className='text-dark text-center fs-4 a'> World-class Speakers</a>
                    <p className='text-center fs-5 para'>Joining us from all around the world are over twenty fantastic speakers, here to
                        share their stories.</p>
                </div>
                <div className='col-lg-4'>
                    <h4 className=' text-center text-primary'>SCHEDULE</h4>
                    <img src={schedule} className='d-block w-100 img-fluid' alt="slide2" />
                    <a href="/schedule" className='text-dark fs-4 text-center a'>Three Inspiring Days</a>
                    <p className='text-center fs-5 para'>Enjoy three inspiring and action-packed days of tals, gatherings, and all-around good
                        times.</p>
                </div>
                <div className='col-lg-4'>
                    <h4 className=' text-center text-primary'>VENUE</h4>
                    <img src={venue} className='d-block w-100 img-fluid' alt="slide3" />
                    <a href="/venue" className=' text-dark fs-4 a'>The Chicago Theatre</a>
                    <p className='text-center fs-5 para'>Within the heart of downtown Chicago,The Chicago Theatre will provide a beautiful
                        conference venue.</p>
                </div>
                
            </div>

            <div className='row'>
                <div className='col-lg-4'>
                    <h4 className=' text-center text-primary'>SPEAKERS</h4>
                    <img src={speakers} className='d-block w-100 img-fluid' alt="slide1" />
                    <a href="/speakers" className='text-dark text-center fs-4 a'> World-class Speakers</a>
                    <p className='text-center fs-5 para'>Joining us from all around the world are over twenty fantastic speakers, here to
                        share their stories.</p>
                </div>
                <div className='col-lg-4'>
                    <h4 className=' text-center text-primary'>SCHEDULE</h4>
                    <img src={schedule} className='d-block w-100 img-fluid' alt="slide2" />
                    <a href="/schedule" className='text-dark fs-4 text-center a'>Three Inspiring Days</a>
                    <p className='text-center fs-5 para'>Enjoy three inspiring and action-packed days of tals, gatherings, and all-around good
                        times.</p>
                </div>
                <div className='col-lg-4'>
                    <h4 className=' text-center text-primary'>VENUE</h4>
                    <img src={venue} className='d-block w-100 img-fluid' alt="slide3" />
                    <a href="/venue" className=' text-dark fs-4 a'>The Chicago Theatre</a>
                    <p className='text-center fs-5 para'>Within the heart of downtown Chicago,The Chicago Theatre will provide a beautiful
                        conference venue.</p>
                </div>
                
            </div>

            <div className='row'>
                <div className='col-lg-4'>
                    <h4 className=' text-center text-primary'>SPEAKERS</h4>
                    <img src={speakers} className='d-block w-100 img-fluid' alt="slide1" />
                    <a href="/speakers" className='text-dark text-center fs-4 a'> World-class Speakers</a>
                    <p className='text-center fs-5 para'>Joining us from all around the world are over twenty fantastic speakers, here to
                        share their stories.</p>
                </div>
                <div className='col-lg-4'>
                    <h4 className=' text-center text-primary'>SCHEDULE</h4>
                    <img src={schedule} className='d-block w-100 img-fluid' alt="slide2" />
                    <a href="/schedule" className='text-dark fs-4 text-center a'>Three Inspiring Days</a>
                    <p className='text-center fs-5 para'>Enjoy three inspiring and action-packed days of tals, gatherings, and all-around good
                        times.</p>
                </div>
                <div className='col-lg-4'>
                    <h4 className=' text-center text-primary'>VENUE</h4>
                    <img src={venue} className='d-block w-100 img-fluid' alt="slide3" />
                    <a href="/venue" className=' text-dark fs-4 a'>The Chicago Theatre</a>
                    <p className='text-center fs-5 para'>Within the heart of downtown Chicago,The Chicago Theatre will provide a beautiful
                        conference venue.</p>
                </div>
                
            </div>
            </div>
        </>
    )
}