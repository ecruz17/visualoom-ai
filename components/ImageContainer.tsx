import React from 'react';
interface Props {
  url: string;
}

export const ImageContainer = ({ url }: Props) => {
  return (
    <div className='bg-slate-600 border-white rounded-md flex flex-col justify-center items-center overflow-hidden'>
        <img
          src={url}
          alt={'Generated_Image'}
          className='w-full h-full object-contain'
        />
    </div>
  )
}
