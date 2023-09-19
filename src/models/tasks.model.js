import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Task = db.define( 'tasks', {
    title: {
        type: DataTypes.STRING(30),
        allowNull : false,
        unique: true,
    },
    description: {
        type:DataTypes.TEXT,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN(),
        allowNull:false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
    },
}, {
    timestamps: false,
} );

export default Task;