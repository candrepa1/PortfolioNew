import React from 'react';

import Galaxy from '../images/pexels-background.jpg';

const Projects = () => {
    return(
        <section className="main d-flex flex-column justify-content-center align-items-center text-center">
            <h3 className="mb-5">PROJECTS</h3>
            <hr className="w-50 mb-4"/>
            <p className="w-50 my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur minima soluta blanditiis, expedita labore eius inventore totam corrupti. Soluta quis expedita quae perspiciatis dignissimos laborum asperiores cum earum quaerat perferendis!</p>
            <div className="mt-5">
                <img src={Galaxy} alt="project1" className="rounded-circle mr-5"/>
                <img src={Galaxy} alt="project2" className="rounded-circle mr-5"/>
                <img src={Galaxy} alt="project3" className="rounded-circle mr-5"/>
                <img src={Galaxy} alt="project4" className="rounded-circle"/>
            </div>
        </section>
    );
}

export default Projects;