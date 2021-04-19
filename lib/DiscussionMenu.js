import React from "react";
import { useTranslation } from "react-i18next";

import { Tab, Tabs } from "react-bootstrap";

import { Current } from "./Tabs/Current";
import { All } from "./Tabs/All";
import { New } from "./Tabs/New";

export const DiscussionMenu = ({ channel, setChannel }) => {
    const { t } = useTranslation("core");

    const components = {
        current: Current,
        all: All,
        new: New
    };

    return (
        <Tabs defaultActiveKey="current" style={{margin: "1em"}}>
            {
                ["current", "all", "new"].map(tab => {
                    const Component = components[tab];
                    return (
                        <Tab key={tab} eventKey={tab} title={t(tab)}>
                            <Component {...{channel, setChannel}}/>
                        </Tab>
                    );
                })
            }
        </Tabs>
    );
};

