import express from "express";
import bodyParser from "body-parser";
import { postUser } from "./src/users/controllers";
import makeCallBack from "./src/express";
import dotenv from "dotenv";
import run from "./src/db";

dotenv.config();
run().catch((error) => console.log(error));

const app = express();
app.use(bodyParser.json());

app.post("/api/users", makeCallBack(postUser));

app.listen(4000, () => console.log("I am listening"));
