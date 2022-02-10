const mongoose = require('mongoose');
// CONNECT YOUR APP TO THE MONGODB
mongoose
  //       Atlas link   cats-app-dev is the name of our database
  //            |            |
  .connect(
    "mongodb+srv://SantiGaray:KhaleeFit251034@cluster0.6fts6.mongodb.net/cats-app-dev?retryWrites=true&w=majority"  
  )
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
