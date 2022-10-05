const express = require("express");
const app = express();
const useRouter = require("./users/users.router");

app.use(express.json());

app.use("/", useRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server OK" });
});

app.listen(8000, () => {
  console.log("Served started at port 8000");
});
