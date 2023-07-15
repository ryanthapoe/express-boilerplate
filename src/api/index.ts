import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import dummy from './dummy';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - V1',
  });
});

router.use('/dummy', dummy);

export default router;