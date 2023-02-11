import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setErr(true);
            console.log(err);
            setLoading(false);
        }
    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Jash Chat</span>
                <span className="title">LogIn</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button type="submit">Login</button>
                </form>
                <p>
                    You do not have an Account?
                    <Link to="/register">Register</Link>{" "}
                </p>
            </div>
        </div>
    );
}

export default Login;
