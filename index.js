import express from "express";
import massive from "massive";
import {} from "dotenv/config";
const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive(CONNECTION_STRING).then((db) => {
  app.set("db", db);
});

app.get("/", (req, res) => {
  const db = req.app.get("db");
  db.get_quizes([1])
    .then((quizzes) => res.status(200).send(quizzes))
    .catch((error) => res.status(500).send(error));
});

app.listen(SERVER_PORT, () =>
  console.log("Example app listening on " + SERVER_PORT)
);
