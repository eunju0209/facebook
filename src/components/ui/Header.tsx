import { BsFacebook } from 'react-icons/bs';

export default function Header() {
  return (
    <header className='flex items-center p-2 justify-center text-xl font-semibold text-blue-500 shadow-md mb-2 sticky top-0 bg-white'>
      <BsFacebook className='text-2xl mr-1' />
      <h1>Facebook</h1>
    </header>
  );
}
