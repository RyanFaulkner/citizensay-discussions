import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { rcDomain } from "../../client";
import moment from "moment";

export const All = ({ setChannel }) => {
    const [ channels, setChannels ] = useState([]);
    const user = Meteor.user();
    useEffect(() => {
        if(user && user.profile && user.profile.rcAuthToken)
            HTTP.get(rcDomain + "/api/v1/channels.list", {
                headers: {
                    "X-Auth-Token": user.profile.rcAuthToken,
                    "X-User-Id": user.profile.rcUserId
                },
                params: {
                    query: '{"name": {"$regex": "^(?!([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})$).*$"}}'
                }
            }, () => (!e && r) && setChannels(r.data.channels));
    }, []);
    return (
        <ListGroup>
            {
                channels
                    .sort((c1, c2) => new Date(c2._updatedAt) - new Date(c1._updatedAt))
                    .map(c =>
                        <ListGroup.Item key={c._id} href={"#" + c.name} onClick={() => setChannel(c)}>
                            {c.name}
                            <small>{moment(c._updatedAt).fromNow()}</small>
                        </ListGroup.Item>
                    )
            }
        </ListGroup>
    );
};