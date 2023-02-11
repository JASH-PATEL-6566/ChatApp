import React from "react";

function Message() {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjUuK5Qmq0vFDfUMleYdDJcX5UzPzyeYNdpkflv2haw&s"
                    alt="profile"
                />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                {/* <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjUuK5Qmq0vFDfUMleYdDJcX5UzPzyeYNdpkflv2haw&s"
                    alt="image"
                /> */}
            </div>
        </div>
    );
}

export default Message;
