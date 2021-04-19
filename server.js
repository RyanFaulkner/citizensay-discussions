import { Groups, Tiles } from "meteor/citizensay:core";

Meteor.startup(() => {

    const group = "communicate",
          _id = "discussions";

    if (!Groups.findOne(group))
        Groups.insert({_id: group});

    if (!Tiles.findOne(_id))
        Tiles.insert({
           _id,
           group,
           icon: "comments",
           color: "rgb(116,133,169)",
           size: "xlarge"
       });

});