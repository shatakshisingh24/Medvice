const Sequelize = require("sequelize");

const db = new Sequelize("medvice", "postgres", "root", {
  dialect: "postgres",
  port: 5432,
  omitNull: true,
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

module.exports = db;
require("./codebook");

db.sync().then(() => console.log("Tables Created If Not Existed!"));
