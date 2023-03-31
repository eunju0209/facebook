import { useEffect, useRef, useState } from 'react';
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
  const liRef = useRef<HTMLLIElement>(null);
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

  const handleScroll = () => {
    liRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <section className='grow flex flex-col overflow-hidden'>
      <ul className='grow pt-2 px-4 overflow-y-scroll'>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDelete={handleDelete}
            onLike={handleLike}
            liRef={liRef}
          />
        ))}
      </ul>
      <AddComment onAdd={handleAdd} onScroll={handleScroll} />
    </section>
  );
}

function readCommentsFromLocalStorage(): CommentType[] {
  const comments = localStorage.getItem('comments');
  return comments ? JSON.parse(comments) : [];
}
