import passport from 'passport';
import { Strategy as LocalStorage } from 'passport-local';

exports.login = (email, hashedPassword, secret) => {};

// check user info & generate jwt
const check = async ({ email, hashedPassword }) => {
  passport.use(
    new LocalStorage({
      usernameField: 'email',
      passwordField: '[',
    })
  );
};
