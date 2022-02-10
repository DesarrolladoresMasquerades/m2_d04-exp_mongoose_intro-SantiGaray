/**
 * Liveshare hack
 */

 require("./configs/database.config");

 const Cat = require("./models/Cat.model");

 // Cat.findOneAndUpdate() is dangerous because it will update
 // if the filter object is "wrong"

 Cat.findByIdAndUpdate(
     "6204fff94a45e3852581f7ab", 
     {$set: {name: "Sandra"}},
     { new: true }
    )
    .then((cat) => console.log(cat));
 
 