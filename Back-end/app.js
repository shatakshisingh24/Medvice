const PORT = 9000;
const express = require("express");
const service = require("./Routes/index");
const app = express();

app.use(express.json());
app.use("/", service);

app.get("/", function (req, res) {
  res.status(200).send({ Message: "Server is Running", Status: true });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
