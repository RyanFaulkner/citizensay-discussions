import React from "react";

export const RocketChat = ({ channel }) => {
    return (
        <iframe
            src={"https://li152-22.members.linode.com/channel/" + channel.roomName + "?layout=embedded"}
            allow="camera;microphone"
            style={{
                border: 0,
                width: "100%",
                height: "100%"
            }}
        />
    );
};