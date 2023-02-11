import React from "react";

function Login() {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Jash Chat</span>
                <span className="title">LogIn</span>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Login</button>
                </form>
                <p>You do not have an Account? Register</p>
            </div>
        </div>
    );
}

export default Login;
