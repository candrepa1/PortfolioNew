import React from 'react';

import Profile from '../images/dog.jpg';

const Home = () => {
    return(
        <div className="main text-center d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-4">CAMILA PARADA VALDERRAMA</h1>
            <h2>FRONTEND DEVELOPER</h2>
            <img src={Profile} alt="profile" className="rounded-circle my-5"/>
            <p>Welcome to my portfolio.</p>
            <p className="w-50 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi rerum sit dolor id. Ratione itaque assumenda eum dolores dolor voluptates nesciunt quam a. Eaque corrupti tempora soluta provident at.</p>
        </div>
    );
}

export default Home;