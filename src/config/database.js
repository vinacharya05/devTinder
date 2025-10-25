const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://vinayAch:PBtil0l8hfYVXrEE@node.hears1x.mongodb.net/");
}


connectDB().then(() => {
    console.log("Database connection established");
})
.catch(err => {
    console.log("Database cannot be connected !!")
})


//Can be also written like this

// try {
//     await connectDB();
//     console.log("Database connection established");
// } catch (err) {
//     console.log("Database cannot be connected !!");
// }