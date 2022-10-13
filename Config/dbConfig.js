const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:iRTOFhhnOmbYeZli@job-portal.9img8oy.mongodb.net/Job-Portal?retryWrites=true&w=majority")
    .then(() => {
        console.log('Database connect successfully'.bold.cyan)
    })
    .catch(err => {
        console.log(err);
    })