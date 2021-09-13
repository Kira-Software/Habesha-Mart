const express = require("express");

const app = express();
const dontenv = require("dotenv").config();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const globalErrorHandler = require("./controllers/error-controller"); //error handlers
const AppError = require("./utils/appError");

const bodyparser = require("body-parser");

const authRoute = require("./routes/auth-route");
const itemRoute = require("./routes/item-route");
const ratingRoute = require("./routes/rating-route");
const reportRoute = require("./routes/report-route");
const requestRoute = require("./routes/request-route");
const accountRoute = require("./routes/account-route");
const warningRoute = require("./routes/warning-route");
const CommentRoute = require("./routes/comment-route");


var cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); // Use this after the variable declaration
// Express Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.json());

app.use("/uploads", express.static("uploads"));

// Connecting to Database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// setting up connect-mongodb-session store

const mongoDBstore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySessions",
});

// Express-Session
app.use(
  session({
    name: process.env.COOKIE_NAME, //name to be put in "key" field in postman etc
    secret: process.env.SECRET,
    resave: true,

    saveUninitialized: false,
    store: mongoDBstore,
    cookie: {
      maxAge: 5000000,
      httpOnly: true,
      sameSite: false,
      secure: false,
    },
  })
);

app.use("/api/auth", authRoute);
app.use("/api/user/account", accountRoute);
app.use("/api/item", itemRoute);
app.use("/api/rate", ratingRoute);
app.use("/api/report", reportRoute);
app.use("/api/request", requestRoute);
app.use("/api/warning", warningRoute);
app.use("/api/comment", CommentRoute);

 
app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server `, 404));
});
 
// error handler middleware

app.use(globalErrorHandler);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`server  litsens as port http://localhost/${port}`);
});
