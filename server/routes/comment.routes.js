import { Router } from 'express';
import * as CommentController from '../controllers/comment.controller';
const router = new Router();

// Add a new Coment
router.route('/comment').post(CommentController.addComment);

// Update a Coment by cuid
router.route('/comment/:cuid').put(CommentController.updateComment);

// Delete a Coment by cuid
router.route('/comment/:cuid').delete(CommentController.deleteComment);

export default router;
