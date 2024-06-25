import { LuLoader2 } from "react-icons/lu"

export const ImageLoader = () => {
  return (
    <div className='bg-slate-600 w-[300px]  h-[300px] border-white rounded-md flex flex-col justify-center items-center overflow-hidden'>
      <LuLoader2 size={50} className="animate-spin text-white" />  
    </div>
  )
}
