import Comment from '../models/comment';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';


/**
 * Save a comment
 * @param req
 * @param res
 * @returns void
 */
export function addComment(req, res) {
  if (!req.body.name || !req.body.comment || !req.body.post) {
    res.status(403).end();
  }

  const newComment = new Comment(req.body);
  // Let's sanitize inputs
  newComment.name = sanitizeHtml(newComment.name);
  newComment.content = sanitizeHtml(newComment.comment);
  newComment.cuid = cuid();
  newComment.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(saved);
  });
}

/**
 * Update a Comment
 * @param req
 * @param res
 * @returns void
 */
export function updateComment(req, res) {
  Comment.findOneAndUpdate(
    { cuid: req.params.cuid },
      JSON.parse(JSON.stringify(req.body)),
      { upsert: true })
      .exec((err, saved) => {
        if (err) {
          res.status(500).send(err);
        }
        return res.json(saved);
      });
}

/**
 * Delete a Comment
 * @param req
 * @param res
 * @returns void
 */
export function deleteComment(req, res) {
  Comment.findOne({ cuid: req.params.cuid }).exec((err, comment) => {
    if (err) {
      res.status(500).send(err);
    }

    comment.remove(() => {
      res.status(200).end();
    });
  });
}
