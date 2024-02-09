const { Op } = require("sequelize");
const {
  Question,
  Category,
  sequelize,
  Comments,
  Question_Categories,
} = require("../models");

class MainController {
  async getAll(req, res) {
    const questions = await Question.findAll({
      order: [["likeCount", "DESC"]],
      include: [Category, Comments],
    });
    res.send({ questions });
  }
  async getCategories(req, res) {
    const categories = await Category.findAll();
    res.send({ categories });
  }

  async find(req, res) {
    const question = await Question.findOne({
      where: { id: req.params.id },
      include: [Category, Comments],
    });
    res.send({ question });
  }

  async search(req, res) {
    const questions = await Question.findAll({
      where: {
        question: {
          [Op.like]: `${req.params.text}%`,
        },
      },
      include: [Category, Comments],
    });
    res.send({ questions });
  }

  async addComment(req, res) {
    const comment = await Comments.create(req.body);
    res.send({ comment });
  }

  async addQuestion(req, res) {
    const { question, categories } = req.body;
    const data = await Question.create({ question });
    for (const el of categories) {
      await Question_Categories.create({ categoryId: el, questionId: data.id });
    }
    const newQuestion = await Question.findOne({
      where: { id: data.id },
      include: [Category, Comments],
    });
    res.send({ question: newQuestion });
  }

  async likeQuestion(req, res) {
    await Question.update(
      {
        likeCount: sequelize.literal("likeCount + 1"),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send({ message: "Success" });
  }

  async likeComment(req, res) {
    await Comments.update(
      {
        likeCount: sequelize.literal("likeCount + 1"),
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send({ message: "Success" });
  }

  async deleteQuestion(req, res) {
    await Question.destroy({
      where: { id: req.params.id },
    });
    res.send({ message: "Question deleted" });
  }
}
module.exports = new MainController();
