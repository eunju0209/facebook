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
    <li>
      <Avatar />
      <div>
        <div>
          <CommentView userId={userId} text={text} />
          <button onClick={() => onDelete(id)}>
            <BsTrashFill />
          </button>
        </div>
        <CommentButtons createdAt={createdAt} />
      </div>
    </li>
  );
}
