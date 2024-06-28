import { Footer } from "@/components/Footer";
import { GenerateForm } from "@/components/GenerateForm";

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      
      <div className="my-auto">
        <div className='grid gap-4 mb-2'>
          <h1 className='text-slate-100 text-3xl font-semibold text-center'>
            VisuaLoom AI
          </h1>
        </div>
        <GenerateForm />
      </div>
      <Footer />
    </main>
  )
}
