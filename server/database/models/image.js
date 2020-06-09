const image = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      tableName: 'images',
    }
  );
  Image.associate = (models) => {
    Image.belongsTo(models.Post); // Image는 Post에 속해있다.
  };
  return Image;
};

export default image;
