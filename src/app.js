const express = require('express');
const { swaggerUi, swaggerSpec } = require('./swagger');
const {adminAuth} = require("./middlewares/auth");
const connectDB = require("./config/database");
const User = require("./models/user");


const app = express();

app.post('/signup', async (req, res) => {
    const userObj = {
        firstName: "Vinaya",
        lastName: "Acharya",
        email: "vinay@123.com",
        password: "vinay@123"
    };

    // Creating a new instance of User model
    const user = new User(userObj);
    try {    
    const save = await user.save();
    console.log("Save", save);
    res.send("User Created");
    } catch (err) {
        console.log(err);
        res.status(400).send("Sent successfully", err.message);
    }

})

connectDB().then(() => {
    console.log("Database connection established !!!")
    app.listen(3000, () => {
    console.log("App is listening on port 3000")
   });
}).catch(err => {
    console.log("Could not connect to db");
})



// Serve Swagger UI
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// //Middlewares

// app.use('/admin', adminAuth);

// app.get('/admin/getAccounts', (req, res, send) => {
//     res.send("Get all accounts");
// })

// app.get('/user', (req, res, next) => {
//     try {
//       throw new Error("Error occured");
//       res.send("User fetched");
//     } catch(err) {
//         res.status(500).send("Something went wrong");
//     }
  
// });

// app.use('/', (err, req, res, next) => {
//     console.log("catch error");
//     if (err) {
//         res.status(500).send("something went wrong");
//     }
// })



// /**
//  * @openapi
//  * /user:
//  *   get:
//  *     summary: Returns a greeting message
//  *     tags:
//  *       - Example
//  *     responses:
//  *       200:
//  *         description: Successful response
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 message:
//  *                   type: string
//  *                   example: Hello from the API!
//  */

// app.get("/user", (req, res, next) => {
//     console.log("Handling the route user 2");
//     next();
// });

// app.get("/user", (req, res, next) => {
//     console.log("Handling the route user 3");
//     //next();
//     res.send("User called");
// });

// /**
//  * @openapi
//  * /test:
//  *   get:
//  *     summary: Returns a greeting message
//  *     tags:
//  *       - Example
//  *     responses:
//  *       200:
//  *         description: Successful response
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 message:
//  *                   type: string
//  *                   example: Hello from the API!
//  */
// app.use('/test', [
//     (req, res, next) => {
//     //res.send("Hello from test")
//     console.log("Handling the route user 1");
//     next();
//     //res.send("1st Response !!");
// }, (req, res, next) => {
//     console.log("Handling the route user 2");
//     next();
// },
//  (req, res, next) => {
//     console.log("Handling the route user 2");
//     next();
// },
//  (req, res, next) => {
//     console.log("Handling the route user 2");
//     res.send("Node");
// }
// ]);



