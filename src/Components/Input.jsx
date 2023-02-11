import React from "react";
import attach from "../Image/attach.png";
import img from "../Image/img.png";

function Input() {
    return (
        <div className="input">
            <input type="text" placeholder="Type something..." />
            <div className="send">
                <img src={img} alt="Image" />
                <input type="file" style={{ display: "none" }} id="file" />
                <label htmlFor="file">
                    <img src={attach} alt="Add File" />
                </label>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Input;
