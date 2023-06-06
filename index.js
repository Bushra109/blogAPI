const express = require("express");
const app = express();
const dotenv = require("dotenv");
const multer = require("multer");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/categories");
const path = require("path");
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
}).then(console.log("Connected to mongoDB")).catch(err => console.log(err + "is error"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File uploaded");
})

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/", (req, res) => {
    console.log("Hey , this is main url");
})
app.listen(PORT, () => {
    console.log("Hello World");
})