const Nav = () => {

  return (
    <nav className='fixed top-0 left-0 w-full flex justify-between bg-white px-6 py-3 shadow-md z-50'>
        <div className='font-bold text-xl'>Himanshu Champaneri</div>
        <div className='flex flex-wrap gap-4'>
            <p className='hover:text-[#0f3c3d] hover:scale-110 transition duration-500'>Councilors</p>
            <p className='hover:text-[#0f3c3d] hover:scale-110 transition duration-500'>Hospitals</p>
            <p className='hover:text-[#0f3c3d] hover:scale-110 transition duration-500'>Success Story</p>
            <p className='hover:text-[#0f3c3d] hover:scale-110 transition duration-500'>Blog</p>
            <p className='hover:text-[#0f3c3d] hover:scale-110 transition duration-500'>About Us</p>
        </div>
    </nav>
  )
}

export default Nav