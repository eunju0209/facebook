import { useEffect, useState } from 'react';
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
  const [comments, setComments] = useState(readCommentsFromLocalStorage());

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

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

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

function readCommentsFromLocalStorage(): CommentType[] {
  const comments = localStorage.getItem('comments');
  return comments ? JSON.parse(comments) : [];
}
