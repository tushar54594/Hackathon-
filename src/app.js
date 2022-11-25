const express = require("express");
require("dotenv").config();
const patientRoutes = require("./routes/patientRoutes");
const cors = require("cors");
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require("./database/conn");

app.use("/api/patient", patientRoutes);

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
