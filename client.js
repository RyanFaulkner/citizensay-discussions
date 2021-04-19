import { i18n, library, addRoute } from "meteor/citizensay:core";
import { addField } from "meteor/citizensay:workflows";
import { Chat } from "./lib/workflows/create/Chat";

import { faComments, faCommentSlash, faVideo, faImage, faInfoCircle, faPortrait } from "@fortawesome/free-solid-svg-icons";
import { Discussions } from './lib/Discussions';

i18n.addResource("en", "groups", "communicate", "Communicate")
    .addResources("en", "tiles", {
        discussions: "General Discussion",
        discussionsDesc: "General Discussion"
    })
    .addResources("en", "editors", {
        chat: "Enable workflow chat"
    });

library.add(
    faComments,
    faCommentSlash,
    faVideo,
    faImage,
    faInfoCircle,
    faPortrait
);

addRoute({
    path: "/discussions",
    component: Discussions
});

export const rcDomain = "https://li152-22.members.linode.com";

addField("basic", Chat);