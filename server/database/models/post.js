const post = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: {
        type: DataTypes.TEXT, // 매우 긴 글
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', // 한글 + 이모티콘
      collate: 'utf8mb4_general_ci',
      tableName: 'posts',
    }
  );
  Post.associate = (models) => {
    Post.belongsTo(models.User); // Post는 User에게 속해있다. UserId컬럼 생성
    Post.hasMany(models.Comment); // Post는 여러개의 Comment를 가질 수 있다.
    Post.hasMany(models.Image); // Post는 여러개의 Image를 가질 수 있다.
    Post.belongsTo(models.Post, { as: 'Retweet' }); // Retweet으로 한개의 Post가 다른 Post로 공유될 수 있다. RetweetId 컬럼 생성
    Post.belongsToMany(models.Hashtag, { through: 'PostHashTag' });
    Post.belongsToMany(models.User, { through: 'Like', as: 'Likers' }); // N:M관계, 여러 명의 User가 Post를 Like할 수 있고, 여러 개의 Post가 여러명의 User에 의해 Like 당할 수 있음.
  };
  return Post;
};

export default post;
