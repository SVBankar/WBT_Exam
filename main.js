const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { selectAllUser, addUser } = require("./connection");

app.get("/user", async (req, res) => {
  const list = await selectAllUser();
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const user = req.body;
  await addUser(user);

  res.json({ message: "msg added!" });
});

app.listen(4000, () => console.log("server started."));
