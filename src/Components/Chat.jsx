import React, { useContext } from "react";
import cam from "../Image/cam.png";
import add from "../Image/add.png";
import more from "../Image/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Context/ChatContext";

function Chat() {
    const { data } = useContext(ChatContext);
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user.displayName}</span>
                <div className="chatIcons">
                    <img src={cam} alt="Video call" />
                    <img src={add} alt="Add person" />
                    <img src={more} alt="Menu" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
}

export default Chat;
