import { CommentType } from './CommentList';
import { BsTrashFill } from 'react-icons/bs';
import Avatar from '../ui/Avatar';
import CommentView from './CommentView';
import CommentButtons from './CommentButtons';
import { useEffect, useState } from 'react';
import SubCommentList from '../SubComments/SubCommentList';
import AddSubComment from '../SubComments/AddSubComment';

type CommentProps = {
  comment: CommentType;
  onDelete: (id: number) => void;
  onLike: (id: number) => void;
};

export type SubCommentType = CommentType & { commentId: number };

export default function Comment({ comment, onDelete, onLike }: CommentProps) {
  const [subComments, setSubComments] = useState(
    readSubCommentsFromLocalStorage()
  );
  const [isSub, setIsSub] = useState(false);
  const { id, userId, text, createdAt, like } = comment;

  const handleSub = () => setIsSub(!isSub);

  const handleSubAdd = (comment: SubCommentType) =>
    setSubComments((comments) => [...comments, comment]);

  const handleSubDelete = (id: number) =>
    setSubComments((comments) =>
      comments.filter((comment) => comment.id !== id)
    );

  useEffect(() => {
    localStorage.setItem('subComments', JSON.stringify(subComments));
  }, [subComments]);

  return (
    <li className='w-full flex mb-2'>
      <Avatar />
      <div className='grow ml-2'>
        <div className='flex items-center'>
          <CommentView userId={userId} text={text} />
          <button
            className='ml-2 text-gray-500 transition-all hover:text-red-500'
            onClick={() => {
              console.log(id);
              setSubComments([]);
              onDelete(id);
            }}
          >
            <BsTrashFill />
          </button>
        </div>
        <CommentButtons
          id={id}
          createdAt={createdAt}
          like={like}
          onLike={onLike}
          onSub={handleSub}
        />
        <SubCommentList
          comments={subComments.filter((sub) => sub.commentId === id)}
          onDelete={handleSubDelete}
        />
        {isSub && <AddSubComment commentId={id} onAdd={handleSubAdd} />}
      </div>
    </li>
  );
}

function readSubCommentsFromLocalStorage(): SubCommentType[] {
  const subComments = localStorage.getItem('subComments');
  return subComments ? JSON.parse(subComments) : [];
}
