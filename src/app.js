const express = require('express');
const { swaggerUi, swaggerSpec } = require('./swagger');

const app = express();



// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.use('/',(req, res) => {
//     res.send("Hello from dashboard")
// });

/**
 * @openapi
 * /test:
 *   get:
 *     summary: Returns a greeting message
 *     tags:
 *       - Example
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello from the API!
 */
app.use('/test', [
    (req, res, next) => {
    //res.send("Hello from test")
    console.log("Handling the route user 1");
    next();
    //res.send("1st Response !!");
}, (req, res, next) => {
    console.log("Handling the route user 2");
    next();
},
 (req, res, next) => {
    console.log("Handling the route user 2");
    next();
},
 (req, res, next) => {
    console.log("Handling the route user 2");
    res.send("Node");
}
]);

app.listen(3000, () => {
    console.log("App is listening on port 3000")
});


