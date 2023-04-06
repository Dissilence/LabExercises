const express = require("express");
const minionsRoutes = require("./routes/minionsRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/minions", minionsRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
