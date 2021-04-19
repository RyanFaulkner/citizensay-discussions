import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Form } from "react-bootstrap";
import { rcDomain } from "../../client";

export const New = ({ setChannel }) => {
    const { t } = useTranslation("core");
    const user = Meteor.user();
    const [ error, setError ] = useState("");
    return (
        <Form onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
            HTTP.post(rcDomain + "/api/v1/channels.create", {
                headers: {
                    "X-Auth-Token": user.profile.rcAuthToken,
                    "X-User-Id": user.profile.rcUserId
                },
                data: {
                    name: e.target.name.value
                }
            }, (e, r) => (!e && r) ? setChannel(r.data.channel) : setError(r.data.error));
            e.target.name.value = "";
        }}>
            <Form.Group>
                <Form.Label>{ t("name") }</Form.Label>
                <Form.Control
                    name="name"
                    placeholder={ t("name") }
                    className={error ? "form-control is-invalid": "form-control"}
                />
                {
                    error &&
                        <Form.Control.Feedback type="invalid">
                            { error }
                        </Form.Control.Feedback>
                }
            </Form.Group>
            <Button type="submit">{ t("create") }</Button>
        </Form>
    );
};