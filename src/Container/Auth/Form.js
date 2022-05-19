import React, { useState } from 'react';
import { Button } from 'reactstrap';

function Form(props) {

    const [userType, setUserType] = useState('Login')

    const handletLogin = () => {

    }

    const handleSignup = () => {

    }
    return (
        <>
            <section id="appointment" className="appointment">
                <div className="container">
                    {
                        userType === 'Login'
                            ?
                            <div className="section-title centerr">
                                <h2>Login</h2>
                            </div>
                            :
                            <div className="section-title centerr">
                                <h2>Signup</h2>
                            </div>
                    }
                    <form action method="post" role="form" className="php-email-form">
                        <div className="row">
                            {
                                userType === 'Login' 
                                ? null : 
                                <div className="col-md-12 form-group">
                                <input type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    data-rule="minlen:4" />
                                <div className="validate" />
                            </div>
                            }
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    data-rule="email" />
                                <div className="validate" />
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    placeholder="Your password" />
                                <div className="validate" />
                            </div>
                        </div>
                        {
                            userType === 'Login' ? 
                            <div className="text-center">
                            <button type="submit">Login</button>
                        </div> : <div className="text-center">
                            <button type="submit">Signup</button>
                        </div>
                        }

                       {
                           userType === 'Login' ? 
                            <div className="text-center">
                            <button onClick={() => setUserType('signup')}>signup</button>
                        </div> :  
                        <div className="text-center">
                        <button onClick={() => setUserType('Login')}>Login</button> 
                    </div>
                       }
                    </form>
                </div>
            </section>

        </>
    );
}

export default Form;