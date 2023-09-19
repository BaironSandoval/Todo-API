import Category from "../../models/categories.model.js";
import Task from "../../models/tasks.model.js";

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: [{ model: Category }]
    });
    res.json(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.create(task);
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const task = await Task.update(body, {
      where: {id}
    })
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {id}
    });
    res.status(204).end()
  } catch (error) {
    res.status(400).json(error)
  }
}

export { getAllTasks, createTask, updateTask, deleteTask };
