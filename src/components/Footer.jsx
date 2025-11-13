import { Instagram } from 'lucide-react'
import { Phone } from 'lucide-react'
import { AtSign } from 'lucide-react'
import { MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <div className='grid grid-cols-4 gap-4 p-10 bg-[#0f3c3d]'>
        <div className='bg-orange-900 px-8 py-12 rounded-xl'>
            <h1 className='font-bold text-base text-green-100 pb-2'>International Patients</h1>
            <div className='text-white'>
                <p>• Specialities</p>
                <p>• Our Doctors</p>
                <p>• Patient Stories</p>
                <p>• International Patient Process</p>
            </div>
        </div>
        <div className='bg-yellow-900 px-8 py-12 rounded-xl'>
            <h1 className='font-bold text-base text-green-100 pb-2'>Get in Touch</h1>
            <div className='text-white'>
                <p>• Post a Query</p>
                <p>• Contact Us</p>
                <p>• Book An Appointment</p>
                <p>• Careers</p>
            </div>
        </div>
        <div className='bg-green-900 px-8 py-12 rounded-xl'>
            <h1 className='font-bold text-base text-green-100 pb-2'>Patient Care</h1>
            <div className='text-white'>
                <p>• Find A Doctor</p>
                <p>• Patient Testimonial</p>
                <p>• Doctor Bytes</p>
            </div>
        </div>
        <div className='bg-gray-900 px-8 py-12 rounded-xl'>
            <h1 className='font-bold text-base text-green-100 pb-2'>Stay Connected</h1>
            <div className='flex gap-2'>
                <a href="https://www.instagram.com/brainandspinesurgery" target="_blank"><img className='h-10 hover:scale-102 transmition duration-200 rounded-xl p-2 bg-gray-50' src="/instagram.png" /></a>
                <a href="https://youtube.com/@brainandspinesurgery./" target="_blank"><img className='h-10 hover:scale-102 transmition duration-200 rounded-xl p-2 bg-gray-50' src="/youtube.png"/></a>
                <a href="https://twitter.com/drhimanshuch" target="_blank"><img className='h-10 hover:scale-102 transmition duration-200 rounded-xl p-2 bg-gray-50' src="/twitter.png"/></a>
                <a href="https://m.facebook.com/@drhimanshuchampaneri" target="_blank"><img className='h-10 hover:scale-102 transmition duration-200 rounded-xl p-2 bg-gray-50' src="/facebook.png"/></a>
                <a href="https://www.linkedin.com/in/dr-himanshu-champaneri-17065a34/" target="_blank"><img className='h-10 hover:scale-102 transmition duration-200 rounded-xl p-2 bg-gray-50' src="/linkedin.png"/></a> 
            </div>
        </div>
        <div>
            <img className='h-38 rounded-xl' src="/QR-Code.jpeg"/>
        </div>
        <div className='bg-gray-200 px-6 py-10 rounded-xl'>
            <p><a className='flex items-center gap-5' href="tel:0124-4131011" target="_blank"><Phone size={16} color="#1f3d20" strokeWidth={2.5} /> 0124-4131011</a></p>
            <p><a className='flex items-center gap-5' href="https://api.whatsapp.com/send/?phone=918448845818&text=hi" target="_blank"><i class="ri-whatsapp-fill"></i> WhatsApp</a></p>
            <p><a className='flex items-center gap-5' href="mailto:connect@marengoasia.com" target="_blank"><AtSign size={16} color="#1f3d20" strokeWidth={3} /> connect@marengoasia.com</a></p>
            <p className='flex justify-center gap-5'><MapPin size={24} color="#1f3d20" strokeWidth={3} /> Golf Course Ext Rd, <br />Sushant Lok II, Sector 56, <br /> Gurugram, Ghata, Haryana 122011, India</p>
        </div>
    </div>
  )
}
export default Footer