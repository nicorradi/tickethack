const mongoose = require ('mongoose');
const connectionString = "mongodb+srv://sonicoprod:L4baZ2D0Nn3e@cluster0.rvkp2ja.mongodb.net/tickethack"


mongoose.connect(connectionString,{connectTimeouMS:2000})
    .then(()=> console.log('Database Connected'))
    .catch(error => console.error(error));
