import React, { useState } from 'react';

function Auth(props) {

    const [usertype, setusertype] = useState('login');


    return (
        <section id="appointment" className="appointment">
            <div className="container">
                {
                    usertype ? <div classname="section-title">
                        <h2 className="centeerr">Login</h2>
                    </div> : <div classname="section-title">
                        <h2 className="centeerr">Signup</h2>
                    </div>

                }
                <div action method="post" className="php-email-form">
                    <div className="row">
                        {
                            usertype ? null : <div classname="col-md-7 form-group">
                                <input type="text" name="name" classname="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div classname="validate">
                                </div>
                            </div>

                        }
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="password" className="form-control" name="password" id="phone" placeholder="password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                    </div>


                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Login</button></div>
                </div>
            </div>
        </section>
    );
}

export default Auth;