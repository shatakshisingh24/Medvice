const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define("user", {
  // ID will auto generate

  dob: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  admission_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  admission_age: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  admit_year: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },

  admit_month: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },

  admit_day: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },

  weekday: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
});

module.exports = {
  User,
};
