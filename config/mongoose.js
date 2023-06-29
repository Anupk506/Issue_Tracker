const mongoose = require('mongoose');
mongoose.connect ("mongodb+srv://anupksharma6:N6EYHildEKXXJ5UY@cluster0.7aorkyo.mongodb.net/?retryWrites=true&w=majority")
.then(() => { console.log("Connected!") })
.catch((error) => { console.log("error", error) })
// N6EYHildEKXXJ5UY