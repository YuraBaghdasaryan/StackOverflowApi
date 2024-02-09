module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "question_categories",
    {},
    { timestamps: false, freezeTableName: true }
  );
};
