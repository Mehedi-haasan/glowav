import skin from '../Assets/Image/Group 3293.png'
import Accordion from './Accordion'
const SkinCare = () => {
    return <div className='px-2 md:px-10 lg:px-28 xl:px-44 2xl:px-[300px] py-14'>
        <div className='grid grid-cols-12 gap-6'>
            <div className='grid col-span-12 md:col-span-6'>
                <img src={skin} alt='srdgjbsd' className='w-[496px] h-[424px]' />
            </div>
            <div className='grid col-span-12 md:col-span-6'>
                <div className='pt-8'>
                    <Accordion />
                </div>
            </div>
        </div>
    </div>
}

export default SkinCare
