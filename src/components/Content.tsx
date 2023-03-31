import Avatar from './ui/Avatar';

export default function Content() {
  return (
    <section className='mb-3'>
      <div className='flex items-center mb-2 px-4'>
        <Avatar />
        <span className='ml-1.5 font-semibold'>bori</span>
      </div>
      <p className='mb-2 px-4'>보리입니다 😊</p>
      <img className='w-full' src='./images/bori.jpg' alt='bori' />
    </section>
  );
}
