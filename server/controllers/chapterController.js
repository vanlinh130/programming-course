const {
  createChapters,
  getAllChapters,
  getByIdChapters,
  updateChapters,
  deleteChapters,
} = require("../models/chapterModel");

const create = async (req, res) => {
  try {
    const { title, course_id } = req.body;
    const newChapter = await createChapters({ title, course_id });
    res.status(201).json(newChapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const chapters = await getAllChapters();
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const chapter = await getByIdChapters(req.params.id);
    if (!chapter) return res.status(404).json({ message: "Chapter not found" });
    res.json(chapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { title, course_id } = req.body;
    const updatedChapter = await updateChapters(req.params.id, {
      title,
      course_id,
    });
    if (!updatedChapter)
      return res.status(404).json({ message: "Chapter not found" });
    res.json(updatedChapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const deletedChapter = await deleteChapters(req.params.id);
    if (!deletedChapter)
      return res.status(404).json({ message: "Chapter not found" });
    res.json({ message: "Chapter deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
