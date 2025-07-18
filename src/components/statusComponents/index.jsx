import { AiOutlineLike } from "react-icons/ai";
import './statusComponents.css';


const StatusContainer = () => {
    return (
        <div className='status-container grid grid-cols-3 my-8'>
            <div className='flex items-center gap-3 status-card'>
                <div className='icon-container'>
                    <AiOutlineLike />
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>Finished</p>
                    <p className='font-bold'>18 <span className='text-xs font-bold text-green-300'>+8 tasks</span></p>
                </div>
            </div>
            <div className='flex items-center gap-3 status-card vertical-bar'>
                <div className='icon-container'>
                    <AiOutlineLike />
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>Tracked</p>
                    <p className='font-bold'>31h <span className='text-xs text-red-600'>-6 hours</span></p>
                </div>
            </div>
            <div className='flex items-center gap-3 pl-3 status-card'>
                <div className='icon-container'>
                    <AiOutlineLike />
                </div>
                <div className='flex flex-col'>
                    <p className=' font-bold'>Efficency</p>
                    <p className=' font-bold'>93% <span className='text-xs text-green-300'>+12%</span></p>
                </div>
            </div>
        </div>
    )
}

export default StatusContainer