module.exports = (sequelize, DataTypes) => {
  const favourite = sequelize.define("favourite", {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    timestamps: false,
  });

  favourite.associate = function (models) {
    favourite.belongsTo(models.user, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    favourite.belongsTo(models.recipe, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return favourite;
};
