import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTracker } from "meteor/react-meteor-data";

import { Sidebar } from "meteor/citizensay:core";

import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RocketChat } from "./RocketChat";
import { Jutsu } from "react-jutsu";
import {DiscussionMenu} from "./DiscussionMenu";

export const Discussions = () => {
    const { t } = useTranslation("discussions");

    const { user } = useTracker(() => ({user: Meteor.user()}));

    const [ channel, setChannel ] = useState({
        _id: "GENERAL",
        name: "general",
        u: { username: "admin" }
    });

    const [ chat, setChat ] = useState(true);
    const [ video, setVideo ] = useState(false);
    const [ orientation, setOrientation ] = useState(false);

    if(!user)
       return <>{ t("loginRequired") }</>;
    else
        return (
            <div style={{display: "flex"}}>
                <Sidebar children={
                    <DiscussionMenu {...{channel, setChannel}}/>
                }/>
                <div style={{
                    display: "flex", flex: 1,
                    flexDirection: orientation ? "row" : "column"
                }}>
                    {
                        video ?
                            <>
                                {
                                    chat &&
                                        <Button
                                            variant="light"
                                            onClick={() => setOrientation(!orientation)}
                                        >
                                            <FontAwesomeIcon icon={orientation ? "image": "portrait"}/>
                                        </Button>
                                }
                                <Jutsu
                                    roomName={"N4C_CitizenSay_" + channel.name}
                                    displayName={user.username}
                                    onMeetingEnd={() => {
                                        setVideo(false);
                                        if(!chat)
                                            setChat(true);
                                    }}
                                    containerStyles={{
                                        width: "100%",
                                        height: "100%"
                                    }}
                                />
                                <Button
                                    variant="light"
                                    onClick={() => setChat(!chat)}
                                >
                                    <FontAwesomeIcon icon={chat ? "comment-slash": "comments"}/>
                                </Button>
                            </>
                        :
                            <Button
                                variant="light"
                                onClick={() => setVideo(!video)}
                            >
                                <FontAwesomeIcon icon="video"/>
                            </Button>
                    }
                    {
                        chat &&
                            <RocketChat
                                channel={{roomName: channel.name}}
                            />
                    }
                </div>
            </div>
        );
};