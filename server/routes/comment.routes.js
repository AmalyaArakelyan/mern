import { Router } from 'express';
import * as CommentController from '../controllers/comment.controller';
const router = new Router();

// Add a new Coment
router.route('/comment').post(CommentController.addComment);

export default router;
