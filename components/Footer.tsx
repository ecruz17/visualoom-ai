import Link from 'next/link';
import { BiLogoGithub, BiMailSend } from 'react-icons/bi';
import { BsHeartFill, BsLinkedin } from 'react-icons/bs';

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className='mt-auto shadow-md text-white text-center py-4' id='footer'>
      <div className='flex flex-col justify-center items-center'>
        <p className='flex gap-1 items-center text-sm md:text-base'>
          Developed  with
          <BsHeartFill size={12} color='#9ad2f6' />
          by:
          <Link
            href="https://github.com/ecruz17"
            className='font-bold underline'
            target='_blank'             
          >
            ecruzdev
          </Link>
        </p>
        <p className='flex gap-1 items-center text-sm md:text-base'>
          Made with:
          <Link
            href="https://nextjs.org/"
            className='font-bold underline'
            target='_blank'
          >
            NextJS
          </Link>
        </p>
        <p className='flex gap-1 items-center text-center text-xs md:text-sm'>
          Remember that you can only generate <strong>1 image</strong> every  <strong>24 hours</strong>
        </p>
      </div>
    </footer>
  )
}
