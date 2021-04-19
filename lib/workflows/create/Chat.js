import React from "react";

import { useTranslation } from "react-i18next";
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Chat = ({ workflow }) => {
    const { t } = useTranslation("editors");
    return (
        <>
            <br/>
            <Form.Group>
                <Form.Label>{ t("chat") }</Form.Label>
                <div style={{float: "right"}}>
                    <Form.Check
                        type="checkbox"
                        checked={workflow.chat}
                        onChange={e => Meteor.call("workflows.update", workflow._id, { chat: e.target.checked })}
                    />
                    <OverlayTrigger
                        placement="left"
                        overlay={
                            <Popover>
                                <Popover.Content>
                                    Provide a "default" workflow chat.
                                </Popover.Content>
                            </Popover>
                        }
                    >
                        <a href="#">
                            <FontAwesomeIcon icon="info-circle"/>
                        </a>
                    </OverlayTrigger>
                </div>
            </Form.Group>
        </>
    );
};