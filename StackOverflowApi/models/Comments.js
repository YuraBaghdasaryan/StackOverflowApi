module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "comments",
    {
      text: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      likeCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
