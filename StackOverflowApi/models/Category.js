module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
    "categories",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
