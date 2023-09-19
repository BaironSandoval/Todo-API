import Category from "../../models/categories.model.js";
import Task from "../../models/tasks.model.js";
import User from "../../models/users.model.js";

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
      include: [{ model: Task, include: Category }],
    });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Task }],
    });
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { task, ...user } = req.body;
    const newUser = await User.create(user);
    const userTask = await Task.findOne({
      where: { title: task },
    });
    if (!userTask) {
      await User.destroy({ where: { id: user.id } });
      return res.status(400).json({ error: "no existe esa tarea" });
    }
    await newUser.addTask(userTask);
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getUser, getAllUsers, createUser };
