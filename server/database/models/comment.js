const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment', // 테이블명은 comments
    {
      content: {
        type: DataTypes.TEXT, // 매우 긴글이 될 수 있음.
        allowNull: true, // 댓글 없이 이미지만 들어갈 수 있음
      },
    },
    {
      charset: 'utf8mb4', // 댓글엔 이모지가 쓰일 수 있음.
      collate: 'utf8mb4_general_ci',
      tableName: 'comments', // 웬만하면 테이블명을 그냥 달아주자 // define에서 대문자로 쓰면 소문자+끝에 s가 붙는게 원칙
    }
  );
  Comment.associate = (models) => {
    Comment.belongsTo(models.User); // 댓글은 작성자에게 속해있음.
    Comment.belongsTo(models.Post); // 댓글은 게시글에 속해있음.
  };
  return Comment;
};

export default comment;
