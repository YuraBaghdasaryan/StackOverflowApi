const express = require("express");
const router = require("./routes/mainRoutes");
const app = express();
const cors = require("cors");
const { sequelize } = require("./models");
const MainController = require("./controllers/MainController");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/question", router);
app.get("/categories", MainController.getCategories);

app.listen(8080);