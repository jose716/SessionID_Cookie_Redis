const express = require("express");
const router = require("./routes");
const session = require("./middleware/session");
//const corsMw = require("./middleware/cors");
const cors = require('cors');

const app = express();
app.use(express.json()); // Parse JSON bodies

// Define CORS options to allow requests from localhost
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:80'], // Whitelist the domains you want to allow
  credentials: true
};
app.use(cors(corsOptions)); // Use the cors middleware with your options
// setup CORS logic
//app.options("/{*any}", corsMw);
//app.use(corsMw);

app.use(session);
app.use(router);
app.listen(3000, () => console.log("server is running on port 3000"));