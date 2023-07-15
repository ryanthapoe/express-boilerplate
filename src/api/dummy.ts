import express from 'express';

const router = express.Router();

type Dummy = string[];

router.get<{}, Dummy>('/', (req, res) => {
  res.json(['hello', 'again', 'world']);
});

export default router;