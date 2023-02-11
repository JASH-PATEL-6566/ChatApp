import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <span className="logo">Jash Chat</span>
            <div className="user">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjUuK5Qmq0vFDfUMleYdDJcX5UzPzyeYNdpkflv2haw&s"
                    alt="profile"
                />
                <span>Jash</span>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;
