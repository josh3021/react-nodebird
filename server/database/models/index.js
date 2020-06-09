import Sequelize from 'sequelize';
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: process.env.DATABASE_DIALECT,
  }
);

const models = {
  Comment: sequelize.import('./comment'),
  Hashtag: sequelize.import('./hashtag'),
  Image: sequelize.import('./image'),
  Post: sequelize.import('./post'),
  User: sequelize.import('./user'),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
