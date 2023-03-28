import { CommentType } from './CommentList';

type CommentProps = {
  comment: CommentType;
};

export default function Comment({ comment }: CommentProps) {
  return <li>{comment.text}</li>;
}
