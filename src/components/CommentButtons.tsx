import { formatAgo } from '../util/date';

type CommentButtonsProps = {
  id: number;
  createdAt: number;
  like: boolean;
  onLike: (id: number) => void;
};

export default function CommentButtons({
  id,
  createdAt,
  like,
  onLike,
}: CommentButtonsProps) {
  return (
    <div className='flex items-center gap-3 pl-3 mt-0.5'>
      <button
        className={`text-xs font-semibold hover:underline ${
          like ? 'text-blue-500' : 'text-gray-500'
        }`}
        onClick={() => onLike(id)}
      >
        좋아요
      </button>
      <button className='text-xs font-semibold text-gray-500 hover:underline'>
        답글 달기
      </button>
      <span className='text-xs text-gray-500'>{formatAgo(createdAt)}</span>
    </div>
  );
}
