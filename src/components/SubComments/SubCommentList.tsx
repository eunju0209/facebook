import { SubCommentType } from '../Comments/Comment';
import SubComment from './SubComment';

type SubCommentListProps = {
  comments: SubCommentType[];
  onDelete: (id: number) => void;
};

export default function SubCommentList({
  comments,
  onDelete,
}: SubCommentListProps) {
  return (
    <ul>
      {comments.map((comment) => (
        <SubComment key={comment.id} comment={comment} onDelete={onDelete} />
      ))}
    </ul>
  );
}
