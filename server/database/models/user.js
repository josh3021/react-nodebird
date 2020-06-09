const user = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', //한글 저장,
      tableName: 'users',
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Post, { as: 'Posts' }); // 유저 1명이 여러개의 Post를 가질 수 있다.
    User.hasMany(models.Comment); // 유저 1명이 여러개의 Comment를 가질 수 있다.
    User.belongsToMany(models.Post, { through: 'Like', as: 'Liked' }); // N:M관계, 여러 명의 User가 Post를 Like할 수 있고, 여러 개의 Post가 여러명의 User에 의해 Like 당할 수 있음.
    User.belongsToMany(models.User, {
      through: 'Follow',
      as: 'Followers',
      foreignKey: 'followingId', // Followers에서는 Followings를 foreignKey로 지정
    }); // N:M관계, 여러 명의 User들끼리 서로 Follow (한 테이블안에서 N:M이면 두번쓰고 as로 구별)
    User.belongsToMany(models.User, {
      through: 'Follow',
      as: 'Followings',
      foreignKey: 'followerId', // Followings에서는 Followers를 foreignKey로 지정
    }); // N:M관계, 여러 명의 User들끼리 서로 Follow(한 테이블안에서 N:M이면 두번쓰고 as로 구별)
  };

  User.verifyPassword = (password) => {
    return this.password === password;
  };

  return User;
};

export default user;
