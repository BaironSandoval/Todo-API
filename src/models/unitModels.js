import User from "./users.model.js";
import Task from "./tasks.model.js";
import Category from "./categories.model.js";

const initModels = () => {
    User.belongsToMany(Task, { through: 'userTasks' })
    Task.belongsToMany(User, { through: 'userTasks' })
    Task.belongsTo(Category, { foreignKey: 'categoryId' })
    Category.hasMany(Task, { foreignKey: 'categoryId' })
}

export default initModels;