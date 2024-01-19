import React, { useState } from 'react';
import '../../public/css/iofrm-style.css';
import '../../public/css/iofrm-theme10.css';
import form from '../../public/images/logo-light.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của form

        try {
            const response = await fetch("http://localhost:8000/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            
            // Lưu accessToken vào localStorage
            localStorage.setItem('accessToken', data.accessToken);

            // Chuyển hướng đến trang home
            window.location.href = "/";
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    return (
        <div className="form-body">
            <form className="form-add1" onSubmit={handleLogin}>
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <div className="website-logo-inside">
                                    <a href="/">
                                        <div className="logo">
                                            <img className="logo-size" src={form} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <h3>Get more things done with Loggin platform.</h3>
                                <p>Access to the most powerful tool in the entire design and web industry.</p>
                                <div className="page-links">
                                    <a href="/login" className="active">Login</a>
                                    <a href="/register">Register</a>
                                </div>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="E-mail Address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="form-button">
                                    <button id="submit" type="submit" className="ibtn">Login</button>
                                </div>
                                <div className="other-links">
                                    <span>Or login with</span>
                                    <a href="#">Facebook</a>
                                    <a href="#">Google</a>
                                    <a href="#">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
