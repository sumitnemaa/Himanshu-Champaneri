import { Check } from 'lucide-react'
import { Medal } from 'lucide-react'
import { GraduationCap } from 'lucide-react'
import { Brain } from 'lucide-react'

const Section2 = () => {
  return (
    <div className="bg-gray-100 p-12">
        <div className="flex justify-around items-center px-15">
            <img className="h-[160px] rounded-3xl" src="/neuro2.avif"/>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-[#0f3c3d]">Compassion. Precision. Hope.</p>
                <h1 className="font-bold text-xl">Guiding You to Recovery with Confidence
                    <br />Where Advanced Neurosurgery Meets Compassionate Patient Care
                </h1>
            </div>
        </div>
        <div className='flex justify-around gap-4 px-15 py-8'>
            <div>
                <h1 className="font-bold pb-3">Area Of Expertise :</h1>
                <p className='flex gap-2'><Check size={26} strokeWidth={4} />Functional Neurosurgery like DBS (Deep Brain Stimulation) for Parkinson’s Disease, 
                <br />Dystonia, Essential Tremors, Spinal Cord Stimulation for Failed Back Syndrome.</p>
                <p className='flex gap-2'><Check size={26} strokeWidth={4} />Epilepsy Surgery like Temporal Resections, Vagus Nerve Stimulation</p>
                <p className='flex gap-2'><Check size={26} strokeWidth={4} />Endoportal Brain Tumor Surgery</p>
                <p className='flex gap-2'><Check size={26} strokeWidth={4} />Endoscopic Skull Base Surgery</p>
                <p className='flex gap-2'><Check size={26} strokeWidth={4} />Peripheral Nerve Surgery</p>
                <p className='flex gap-2'><Check size={26} strokeWidth={4} />Intra-operative ultrasonography (IOUSG) for brain and spine tumors</p>
                <p className='flex gap-2'><Check size={26} strokeWidth={4} />Pediatric Neurosurgery</p>
                <p className='flex gap-2'><Check size={26} strokeWidth={4} />Minimally Invasive Spine Surgery</p>
            </div>
            <div className="h-[180px] w-[270px] flex flex-col gap-1 font-sm text-sm text-gray-100 bg-[#2C6D4A] rounded-2xl px-8 py-6">
                <h1 className="font-bold pb-3">Qualifications</h1>
                <p className='flex items-center gap-5'><GraduationCap size={16} /> MBBS</p>
                <p className='flex items-center gap-5'><Medal size={16} strokeWidth={1.5} /> MS (Gold Medal)</p>
                <p className='flex items-center gap-5'><img className='h-4' src="/surgery-ico.png"/> FMAS</p>
                <p className='flex items-center gap-5'><Brain size={16} strokeWidth={1.5} /> DNB (Neurosurgery)</p>
            </div>
        </div>
    </div>
  )
}

export default Section2