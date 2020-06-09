import passport from 'passport';
import db from '../database/models';
import local from './local';

const passportConfig = () => {
  local();
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: {
          id,
        },
      });
      return done(null, user); // req.user
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });
};

export default passportConfig;
