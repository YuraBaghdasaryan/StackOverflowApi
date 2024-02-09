module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "questions",
    {
      question: {
        type: Sequelize.STRING,
      },
      likeCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
