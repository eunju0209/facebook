type CommentViewProps = {
  userId: string;
  text: string;
};

export default function CommentView({ userId, text }: CommentViewProps) {
  return (
    <div className='bg-slate-100 rounded-2xl py-1.5 px-3'>
      <span className='text-sm font-semibold'>{userId}</span>
      <p>{text}</p>
    </div>
  );
}
