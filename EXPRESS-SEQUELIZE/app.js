/**
 * Langkah-langkah menginstall express js
 * npm init -y
 * npm install express
 * npm install nodemon
 * npx nodemon app.js
 *
 * npm install sequelize
 * npm install pg
 * npm install sequelize-cli
 * npx sequelize-cli
 * npx sequelize-cli init
 */

/**
 * Sequelize ORM
 * npm install sequelize
 * npm install pg
 * npm install sequelize-cli
 *  */

/**
 * Perintah sequelize-cli
 * npx sequelize-cli
 * npx sequelize-cli init
 * npx sequelize-cli db:create (membuat database)
 */

// Membuat model
/**
 * Membuat migration
 * migrate
 */

/**
 * Nama model dibuat singular
 * npx sequelize-cli model:generate --name todo --attributes task:string, status:boolean
 * npx sequelize-cli db:migrate
 */

// Inisialisasi express js
const express = require("express");
const app = express();
const port = 3000;

// setting agar bisa request yang seharusnya dari frontend bisa diganti ke postman
// request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// menggunakan folder routes sebagai routing
const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
