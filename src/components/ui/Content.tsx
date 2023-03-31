import Avatar from './Avatar';

export default function Content() {
  return (
    <section className='pb-2 border-b'>
      <div className='flex items-center mb-2 px-4'>
        <Avatar />
        <span className='ml-1.5 font-semibold'>bori</span>
      </div>
      <p className='px-4'>보리입니다 😊</p>
    </section>
  );
}
