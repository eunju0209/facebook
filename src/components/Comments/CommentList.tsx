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
      subComments: [],
    },
  ]);

  const handleAdd = (comment: CommentType) =>
    setComments((comments) => [...comments, comment]);

  const handleDelete = (id: number) =>
    setComments((comments) => comments.filter((comment) => comment.id !== id));

  const handleLike = (id: number) =>
    setComments((comments) =>
      comments.map((comment) =>
        comment.id === id ? { ...comment, like: !comment.like } : comment
      )
    );

  return (
    <section className='px-4'>
      <ul>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDelete={handleDelete}
            onLike={handleLike}
          />
        ))}
      </ul>
      <AddComment onAdd={handleAdd} />
    </section>
  );
}
