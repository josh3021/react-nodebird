import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import expressSession from 'express-session';
import morgan from 'morgan';
import passport from 'passport';
import './config';
import { whitelist } from './config.json';
import { sequelize } from './database/models';
import passportConfig from './passport';
import initRouter from './routes';
const app = express();

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false, // https이면 true,
    },
    name: 'aslkd',
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.set('jwt-secret', process.env.SECRET);

sequelize.sync({ force: false }).then(() => {
  // API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
  passportConfig();
  initRouter(app);
  app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`);
  });
});
