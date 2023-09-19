import Category from "../../models/categories.model.js";

const createCategory = async (req, res) => {
  try {
    const category = req.body;
    await Category.findOrCreate({
      where: { name: category.name },
      defaults: category,
    });
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

export { createCategory };
