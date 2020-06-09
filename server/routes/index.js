import postAPIRouter from './post';
import postsAPIRouter from './posts';
import userAPIRouter from './user';

const initRouter = (app) => {
  app.use('/api/user', userAPIRouter);
  app.use('/api/post', postAPIRouter);
  app.use('/api/posts', postsAPIRouter);
};
export default initRouter;
