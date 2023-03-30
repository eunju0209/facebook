import { FormEvent, useState } from 'react';
import { SubCommentType } from '../Comments/Comment';
import Avatar from '../ui/Avatar';

type AddSubCommentProps = {
  commentId: number;
  onAdd: (comment: SubCommentType) => void;
};

export default function AddSubComment({
  commentId,
  onAdd,
}: AddSubCommentProps) {
  const [text, setText] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmed = text.trim();
    if (trimmed.length === 0) return setText('');

    const newComment = {
      commentId,
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
    <div className='flex items-center'>
      <Avatar />
      <form className='grow flex ml-2' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='답글을 입력하세요...'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='outline-none grow bg-slate-100 py-1.5 px-3 rounded-l-full'
        />
        <button
          type='submit'
          className='w-16 bg-blue-500 text-white rounded-r-full'
        >
          Add
        </button>
      </form>
    </div>
  );
}
