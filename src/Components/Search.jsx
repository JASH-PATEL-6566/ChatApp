import React from "react";

function Search() {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user" />
            </div>
            <div className="userChat">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjUuK5Qmq0vFDfUMleYdDJcX5UzPzyeYNdpkflv2haw&s"
                    alt="profile"
                />
                <span>Jash</span>
            </div>
        </div>
    );
}

export default Search;
