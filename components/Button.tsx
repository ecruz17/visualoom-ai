"use client"

import { LuLoader2 } from "react-icons/lu";

interface Props {
  title: string;
  onClicked?: () => void;
  isSecondary?: boolean;
  isLoading?: boolean;
}

export const Button = ({ title, onClicked, isSecondary = true, isLoading = false }: Props) => {
  return (
    <button
      type='button'
      disabled={isLoading}
      onClick={onClicked}
      className={`${isSecondary ? 'bg-transparent border-2 hover:bg-slate-700 duration-100' : 'bg-slate-600'} text-white font-semibold py-2 text-sm md:px-10 md:text-lg rounded-md hover:bg-slate-700 duration-100`}
    >
      {
        isLoading
          ? (<div className="flex justify-center items-center gap-2">
              <p>Generating</p>
              <LuLoader2 size={20} className="animate-spin" />
            </div>
          )
          : title
      }
    </button>
  )
}
