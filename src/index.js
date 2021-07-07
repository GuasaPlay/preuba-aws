const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_res, req) => {
  req.json({ message: "BACKEND PRUEBA" });
});

app.listen(3000, () => {
  console.log("Server on port");
});
