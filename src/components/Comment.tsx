import { CommentType } from './CommentList';
import { BsTrashFill } from 'react-icons/bs';
import Avatar from './Avatar';
import CommentView from './CommentView';
import CommentButtons from './CommentButtons';

type CommentProps = {
  comment: CommentType;
  onDelete: (id: number) => void;
};

export default function Comment({ comment, onDelete }: CommentProps) {
  const { id, userId, text, createdAt } = comment;
  return (
    <li className='w-full flex mb-2'>
      <Avatar />
      <div className='grow ml-2'>
        <div className='flex items-center'>
          <CommentView userId={userId} text={text} />
          <button
            className='ml-2 text-gray-500 transition-all hover:text-red-500'
            onClick={() => onDelete(id)}
          >
            <BsTrashFill />
          </button>
        </div>
        <CommentButtons createdAt={createdAt} />
      </div>
    </li>
  );
}
