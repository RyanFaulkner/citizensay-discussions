import React from "react";

export const Current = ({ channel }) => (
    <>
        <h4 style={{textAlign: "center"}}>
            #{ channel.name }
        </h4>
        {
            channel.u &&
                <small>{ channel.u.username }</small>
        }
    </>
);
