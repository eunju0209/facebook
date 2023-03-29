type CommentViewProps = {
  userId: string;
  text: string;
};

export default function CommentView({ userId, text }: CommentViewProps) {
  return (
    <div>
      <span>{userId}</span>
      <p>{text}</p>
    </div>
  );
}
