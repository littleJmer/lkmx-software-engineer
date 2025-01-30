const { DataTypes } = require('sequelize');
const sequelize = require("@/server/db");

const User = sequelize.define('users', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM("Masculino", "Femenino"),
    pokemon: DataTypes.ENUM("Bulbasaur", "Charmander", "Squirtle")
});

User.sync({ force: false, alter: true });

export default User;