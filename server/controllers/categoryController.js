const { createCategory, getAllCategories, getCategoryByValue, updateCategory, deleteCategory } = require("../models/categoryModel");

const create = async (req, res) => {
  try {
    const { name, value } = req.body;
    const category = await createCategory(name, value);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getByValue = async (req, res) => {
  try {
    const category = await getCategoryByValue(req.params.value);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const category = await updateCategory(req.params.id, req.body);
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const category = await deleteCategory(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getByValue,
  update,
  remove
};
