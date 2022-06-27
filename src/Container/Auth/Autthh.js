import React , {useState} from 'react';

function Autthh(props) {

    const [userType, setUserType] = useState('Login');

    const handletLogin = () => {

    }

    const handleSignup = () => {

    }

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Login</h2>
                </div>
                <form action method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                            <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                    </div>
                    <div className="text-center"><button type="submit">Login</button></div>
                </form>
            </div>
        </section>
    );
}

export default Autthh;