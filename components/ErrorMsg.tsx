export const ErrorMsg = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="text-sm md:text-2xl text-white px-10 text-justify">{children}</div>
  )
}