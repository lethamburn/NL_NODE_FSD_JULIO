const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {connect} = require("./helpers/db");
const BookRoutes = require("./api/book/book.routes");
const UserRoutes = require("./api/user/user.routes");

dotenv.config();
const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
connect()

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

app.use(express.json({ limit: '1mb' }))

app.use(express.urlencoded({ limit: '1mb', extended: true }));

app.set("secretKey", JWT_SECRET)

app.use("/api/books", BookRoutes);
app.use("/api/users", UserRoutes);


app.use('*', (req, res, next) => {
    const error = new Error()
    error.status = 404
    error.message = 'Route not found'
    return next(error)
})

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
})

app.disable('x-powered-by')

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
