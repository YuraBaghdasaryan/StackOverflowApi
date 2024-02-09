const { DB, USER, HOST, DIALECT, PASSWORD } = require("../config/database");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});
/** ******************************** Models ********************************* */
const Category = require("./Category")(sequelize, Sequelize);
const Question = require("./Question")(sequelize, Sequelize);
const Comments = require("./Comments")(sequelize, Sequelize);
const Question_Categories = require("./Question_Categories")(
  sequelize,
  Sequelize
);
/** ******************************** Relations ********************************* */
Question.belongsToMany(Category, {
  through: "question_categories",
  onDelete: "CASCADE",
});
Question.hasMany(Comments, {
  onDelete: "CASCADE",
});
sequelize.sync();

module.exports = {
  sequelize,
  Category,
  Question,
  Comments,
  Question_Categories,
};
