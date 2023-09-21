import express from "express";
import cors from "cors";
import db from "./utils/database.js";
import initModels from "./models/unitModels.js";
import usersRoutes from "./components/users/users.routes.js"
import tasksRoutes from "./components/tasks/tasks.routes.js"
import categoriesRoutes from "./components/categories/categories.routes.js"

initModels();

db.authenticate()
  .then(() => {
    console.log("Database connection established successfully.");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => console.log("Database sync"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT ?? 8000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(usersRoutes, tasksRoutes, categoriesRoutes);

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
