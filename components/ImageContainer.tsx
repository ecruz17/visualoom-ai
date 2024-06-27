import React from 'react';
import Image from 'next/image';
interface Props {
  url: string;
}

export const ImageContainer = ({ url }: Props) => {
  return (
    <div className='bg-slate-600 border-white rounded-md flex flex-col justify-center items-center overflow-hidden'>
      <Image
        src={url}
        alt="Image from S3"
        width={300}
        height={300}
        className='w-full h-full object-contain'
      />
    </div>
  )
}
