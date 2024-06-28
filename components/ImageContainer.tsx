import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiDownload } from 'react-icons/bi';
import { ImageLoader } from './ImageLoader';

interface Props {
  url: string;
  isLoading: boolean;
  prompt: string;
}

export const ImageContainer = ({ url, isLoading, prompt }: Props) => {
  return (
    <>
      {
        isLoading
          ? (<ImageLoader />)
          : (       
            <div className='flex flex-col justify-center'>
              <Image
                src={url}
                alt="Image from S3"
                width={300}
                height={300}
                loading='lazy'
                className='flex flex-col rounded-md object-contain overflow-hidden'
              />
              <Link
                href={url}
                download={`${prompt}_visualoom_ai`}
                className='flex justify-center items-center text-white font-semibold text-sm md:text-base bg-slate-600 rounded-md mt-4 p-2 gap-2'
              >
                Download Image
                <BiDownload
                  size={20}
                /> 
              </Link>
            </div>
          )
      }
    </>
  )
}
