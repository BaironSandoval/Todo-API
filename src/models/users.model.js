import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const User = db.define( 'users', {
    username: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique :true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

export default User;