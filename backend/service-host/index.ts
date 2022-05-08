import express from "express";
import AppBootstraper from "./Bootstrap";

const app = express();

app.use(AppBootstraper());

let PORT = 5000;

if (process.env.NODE_ENV === "production") {
    PORT = 9000;
}
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});
