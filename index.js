const express = require("express");
const app = express();
const padraoRouter = require("./routes/padrao.routes");
const connectToDB = require("./src/conect");
const port = 3000;
connectToDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(padraoRouter);

app.listen(port, () => {
  console.log("🚀 Server is running.");
});
