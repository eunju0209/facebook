type CommentButtonsProps = {
  createdAt: number;
};

export default function CommentButtons({ createdAt }: CommentButtonsProps) {
  return (
    <div>
      <button>좋아요</button>
      <button>답글 달기</button>
      <span>{createdAt}</span>
    </div>
  );
}
