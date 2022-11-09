const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(require("./routes/candidate"));
app.use(require("./routes/cities"));
app.use(require("./routes/languages"));
app.use(require("./routes/transport"));
app.use(require("./routes/country"));
app.use(require("./routes/typeVisa"));
app.use(require("./routes/visaStatus"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
