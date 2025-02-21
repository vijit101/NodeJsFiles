import express from "express";
import path from "path";
import { userController } from "./src/controllers/users.controller.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(express.urlencoded({extended: true}));

app.get("/users", userController);

export default app;
