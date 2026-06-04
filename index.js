const express = require("express");
const cors = require("cors");

const sequelize = require("./utils/db");

require("./models/User");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

sequelize.sync()
.then(() => {

    app.listen(3000, () => {

        console.log(
            "Server Running On Port 3000"
        );
    });

})
.catch((err) => {

    console.log(err);
});