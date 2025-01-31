import { DataTypes } from "sequelize";
import sequelize from "../db";

const User = sequelize.define('users', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM("Masculino", "Femenino"),
    pokemon: DataTypes.ENUM("Bulbasaur", "Charmander", "Squirtle")
});

export default User;