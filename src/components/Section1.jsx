const Section1 = () => {
  return (
    <div className='h-[84vh] flex justify-between items-center overflow-hidden bg-[#0f3c3d] p-10 pt-30'>
      
      <div>
        <div className='flex flex-col gap-[8px]'>
          <h2 className='font-bold text-white'>Clinical Director - Department of Neurosurgery
              <br />Marengo Asia Hospitals, Gurugram
          </h2>
          <h1 className='flex flex-col font-bold text-5xl text-white pb-2'>India’s First <br />Schizophrenia <br />Surgeon</h1>
          <span className='text-lg text-gray-300 border-l-2 border-gray-400 pl-2'>Pioneering deep brain stimulation for treatment-resistant cases.</span>
        </div>
        <div className='flex gap-6 pt-8 text-gray-300 pb-10'>
          <div className='text-sm border-r-2 leading-[-3px] border-gray-400 pr-4'>
            <p className='flex items-center'>• Neurosciences</p>
            <p className='flex items-center'>• Neurosurgery</p>
            <p className='flex items-center'>• Robotic Surgery</p>
            <p className='flex items-center'>• Spine Surgery</p>
          </div>
          <div className='text-center border-r-2 border-gray-400 pr-4'>
            <h1 className='text-3xl'>1500+</h1> 
            <span className='text-sm'>Neurosurgeries</span>
          </div>
          <div className='text-center'>
            <h1 className='text-3xl'>14+</h1> 
            <span className='text-sm'>Years of Experience</span>
          </div>
        </div>
      </div>
      
      <div className="relative flex justify-center items-center h-[500px]">
        <div className="absolute w-[350px] h-[350px] rounded-full bg-[#1f5c5f] opacity-90" />
        <img
          src="pic2-bg.png"
          alt="profile"
          className="relative z-10 w-[250px] object-contain"
        />
      </div>
    </div>
  )
}

export default Section1