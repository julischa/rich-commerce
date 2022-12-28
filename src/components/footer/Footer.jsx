const Footer = () => {
  return (
    <div className='w-full bg-slate-50 flex justify-center items-center py-10 h-[10vh]'>
      <div className='flex items-center gap-2'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://santimanso.com/'
          className='text-2xl text-gray-600 font-medium hover:-translate-y-1 duration-300 hover:rotate-[-1deg]'
        >
          by Santiago Manso Castro
        </a>
        <i className='fa-brands fa-linkedin text-3xl text-blue-500 cursor-pointer hover:-translate-y-2 duration-500 hover:-rotate-6'></i>
        <i className='fa-brands fa-square-github text-3xl text-slate-700 cursor-pointer hover:-translate-y-2 duration-500 hover:rotate-6'></i>
      </div>
    </div>
  )
}

export default Footer
