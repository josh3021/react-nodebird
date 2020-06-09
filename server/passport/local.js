import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as LocalStorage } from 'passport-local';
import db from '../database/models';
// check user info & generate jwt
const local = () => {
  passport.use(
    'login',
    new LocalStorage(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await db.User.findOne({ where: { email } });
          if (!user) {
            // user가 존재하지 않을때
            return done(null, false);
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            // 성공시
            return done(null, user);
          }
          return done(null, false); // 비밀번호 틀림
        } catch (e) {
          console.error(e);
          return done(e);
        }
      }
    )
  );
};

export default local;
