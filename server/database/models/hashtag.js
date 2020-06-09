const hashtag = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    'Hashtag',
    {
      name: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      tableName: 'hashtags',
    }
  );
  Hashtag.associate = (models) => {
    Hashtag.belongsToMany(models.Post, { through: 'PostHashtag', as: 'Posts' });
  };
  return Hashtag;
};

export default hashtag;
