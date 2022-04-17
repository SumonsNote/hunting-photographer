import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
        <h2 className='text-uppercase fs-3 py-4'>Questions and answers</h2>
        <div className='border-bottom border-2 bg bg-success w-25 container my-5'></div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Difference between authorization and authentication?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Authentication</strong> is the process of verifying someone has permission of access or not. A perfect application has absolutely security system means authentication by doing it we can easily identify someone is the right person or not in that application. <strong>Authorization</strong> is the process of verifying of specific application files, and data that a user has to access to that application as simple as that.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>There are some reasons of using google firebase. Firebase provides us fast hosting, readable and extensive database, Google Analytics, free use of dynamic links, firebase authentication and more so having of lots of tools I recommend to use firebase. There are so much third party authentication systems in the market. I added some popular like Auth0, SecureAuth, Microsoft Azure, Oracle Corporation etc.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What other services does firebase provide other than authentication?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Google Firebase provides so many other options except authentication such as Database management, Hosting, Higher website traffic, google analytics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;