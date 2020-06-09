import bcrypt from 'bcrypt';
import express from 'express';
import passport from 'passport';
import db from '../database/models';
import { getUserInfo } from './controllers/utils';
const router = express.Router();

// sequelize 객체 가져올땐 user.toJSON()으로 가져오기

router.get('/', async (req, res, next) => {
  // 사용자 조회
  // console.log(`req.user: ${JSON.stringify(req.user.toJSON())}`);
  if (!req.user) {
    res.status(401).send('로그인이 필요합니다.');
  }
  try {
    console.log(req.user);
    const userInfo = await getUserInfo(req.user.id);
    return res.json(userInfo);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  // 회원가입
  try {
    const existingUser = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (existingUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // 비밀번호 filter
    const filteredUser = Object.assign({}, newUser.toJSON());
    delete filteredUser.password;
    return res.status(200).json(filteredUser);
  } catch (e) {
    console.error(e);
    // 에러 처리는 여기서 하고 마지막에 next
    next(e);
  }
});

router.get('/:id', (req, res) => {});

router.post('/login', passport.authenticate('login'), async (req, res, next) => {
  try {
    const userInfo = await getUserInfo(req.user.id);
    return res.json(userInfo);
  } catch (e) {
    next(e);
  }
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('로그아웃 성공');
});

router.get('/:id/follow', (req, res) => {});

router.post('/:id/follow', (req, res) => {});

router.delete('/:id/follower', (req, res) => {});

router.get('/:id/posts', (req, res) => {});

export default router;
