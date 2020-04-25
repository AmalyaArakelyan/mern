import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: { type: 'String', required: true },
  comment: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Comment', CommentSchema);
