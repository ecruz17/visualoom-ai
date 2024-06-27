"use client"

import React, { useState } from 'react'
//COMPONENTS
import { Button } from './Button'
import { ImageContainer } from './ImageContainer'
import { Textarea } from './Textarea'
//HOOKS
import { useGenerated } from '@/hooks/useGenerated'
import { useQueryClient } from '@tanstack/react-query'
import { ImageLoader } from './ImageLoader'
import { ErrorMsg } from './ErrorMsg'

export const GenerateForm = () => {
  const [content, setContent] = useState<string>('');

  const imageQuery = useGenerated(content);

  const queryClient = useQueryClient();

  const handleReset = () => {
    setContent('');
    queryClient.removeQueries();
  }

  const handleGenerate = () => imageQuery.refetch();

  return (
    <>
    <div className='my-2'>
        <Textarea
          content={content}
          setContent={setContent}
        />
      </div>
      
    <div className='flex mt-4 gap-4'>
        <Button
          title='Generate'
          isSecondary={false}
          onClicked={handleGenerate}
          isLoading={imageQuery.isFetching}
        />
        <Button
          title='Clear'
          onClicked={handleReset}
        />
      </div>
  
      <div className='mt-8'>
        {
          imageQuery.isFetching && (<ImageLoader />)
        }
        {
          imageQuery.isError && (<ErrorMsg>{imageQuery.error.message}</ErrorMsg>)
        }
        {
          imageQuery.data?.statusCode === 429
            ? (<ErrorMsg>{imageQuery.data.body as string}</ErrorMsg>)
            : imageQuery.data && (<ImageContainer url={imageQuery.data.body} />)
        }
      </div>
    </>
  )
}
