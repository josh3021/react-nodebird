import express from 'express';
import db from '../database/models';
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).send('Unauthorization');
    }
    const hashtags = req.body.content.match(/#[^\s]*/g); // 해시태그를 배열로 리턴
    const newPost = await db.Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) =>
          db.Hashtag.findOrCreate({ where: { name: tag.slice(1).toLowerCase() } })
        )
      );
      await newPost.addHashtags(result.map((r) => r[0])); //addHashtags는 post에서 hashtags와 associate되어있는걸 인지하고 알아서 만들어줌. (add, get, set, remove 다있다구)
    }
    const fullPost = await db.Post.findOne({
      where: {
        id: newPost.id,
      },
      include: [
        {
          model: db.User,
        },
      ],
    });
    return res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/images', (req, res) => {});

export default router;
