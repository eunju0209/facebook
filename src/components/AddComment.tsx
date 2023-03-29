import { FormEvent, useState } from 'react';
import { CommentType } from './CommentList';

type AddCommentProps = {
  onAdd: (comment: CommentType) => void;
};

export default function AddComment({ onAdd }: AddCommentProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmed = text.trim();
    if (trimmed.length === 0) return setText('');

    const newComment = {
      id: Date.now(),
      userId: 'bori',
      text: trimmed,
      like: false,
      createdAt: Date.now(),
    };
    onAdd(newComment);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='댓글을 입력하세요...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );
}
