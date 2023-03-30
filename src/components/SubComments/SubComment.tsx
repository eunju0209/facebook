import CommentView from '../Comments/CommentView';
import Avatar from '../ui/Avatar';
import { BsTrashFill } from 'react-icons/bs';
import { formatAgo } from '../../util/date';
import { SubCommentType } from '../Comments/Comment';

type SubCommentPops = {
  comment: SubCommentType;
  onDelete: (id: number) => void;
};

export default function SubComment({ comment, onDelete }: SubCommentPops) {
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
        <span className='pl-3 text-xs text-gray-500'>
          {formatAgo(createdAt)}
        </span>
      </div>
    </li>
  );
}
