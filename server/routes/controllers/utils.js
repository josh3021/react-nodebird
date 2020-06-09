import db from '../../database/models';

export const filterAllowed = (raw, allowed) => {
  return Object.keys(raw)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: raw[key],
      };
    }, {});
};

export const getUserInfo = (id) => {
  return db.User.findOne({
    where: { id },
    include: [
      {
        model: db.Post,
        as: 'Posts',
        attributes: ['id'],
      },
      {
        model: db.User,
        as: 'Followings',
        attributes: ['id'],
      },
      {
        model: db.User,
        as: 'Followers',
        attributes: ['id'],
      },
    ],
    attributes: ['id', 'nickname', 'email'],
  });
};
