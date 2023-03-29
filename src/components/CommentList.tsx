import { useState } from 'react';
import AddComment from './AddComment';
import Comment from './Comment';

export type CommentType = {
  id: number;
  userId: string;
  text: string;
  like: boolean;
  createdAt: number;
};

export default function CommentList() {
  const [comments, setComments] = useState([
    {
      id: 1,
      userId: 'bori',
      text: '안녕하세요.',
      like: false,
      createdAt: Date.now(),
    },
    {
      id: 2,
      userId: 'bori',
      text: '반갑습니다.',
      like: false,
      createdAt: Date.now(),
    },
  ]);

  const handleAdd = (comment: CommentType) =>
    setComments((comments) => [...comments, comment]);

  return (
    <section>
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
      <AddComment onAdd={handleAdd} />
    </section>
  );
}
