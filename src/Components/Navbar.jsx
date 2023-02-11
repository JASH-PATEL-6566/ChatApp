import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebase";

function Navbar() {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <span className="logo">Jash Chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt={currentUser.displayName} />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;
