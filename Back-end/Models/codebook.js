const Sequelize = require("sequelize");
const db = require("./db");
const { User } = require("./user");

const Codebook = db.define("codebook", {
  // ID from User Table
  patient_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },

  cholesterol: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },

  glucose: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },

  hdl: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },

  chol_hdl: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  age: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },

  gender: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  height: {
    type: Sequelize.NUMBER,
    allowNull: true,
  },

  weight: {
    type: Sequelize.NUMBER,
    allowNull: true,
  },

  bmi: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  systolic_bp: {
    type: Sequelize.NUMBER,
    allowNull: true,
  },

  diastolic_bp: {
    type: Sequelize.NUMBER,
    allowNull: true,
  },

  waist: {
    type: Sequelize.NUMBER,
    allowNull: true,
  },

  hip: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  waist_hip: {
    type: Sequelize.DATE,
    allowNull: true,
  },

  // Yes or No
  diabetes: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
});

module.exports = {
  Codebook,
};
