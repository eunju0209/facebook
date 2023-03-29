import { formatAgo } from '../util/date';

type CommentButtonsProps = {
  createdAt: number;
};

export default function CommentButtons({ createdAt }: CommentButtonsProps) {
  return (
    <div className='flex items-center gap-3 pl-3 mt-0.5'>
      <button className='text-xs font-semibold text-gray-500 hover:underline'>
        좋아요
      </button>
      <button className='text-xs font-semibold text-gray-500 hover:underline'>
        답글 달기
      </button>
      <span className='text-xs text-gray-500'>{formatAgo(createdAt)}</span>
    </div>
  );
}
