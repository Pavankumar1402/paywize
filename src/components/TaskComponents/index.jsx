import './taskComponent.css'
import { BsThreeDots } from "react-icons/bs";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";


const TaskContainer = () => {
    return (
        <div >
            <div className='task-container-header'>
                <div className='flex items-center gap-3'>
                    <h1 className='text-lg font-bold'>Current Task</h1>
                    <div className='virtical-divider'></div>
                    <p className='text-sm font-semibold'>Done 30%</p>
                </div>
                <div>
                    <select className='select-box'>
                        <option value="week">week</option>
                        <option value="week">month</option>
                        <option value="week">year</option>
                    </select>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <div className='flex gap-3 items-center w-1/2'>
                        <div className='table-icon-container bg-yellow-100'><BsLightningChargeFill/></div>
                        <p>Product Review for UI8 Market</p>
                    </div>
                    <div className='flex gap-3 items-center justify-between w-1/2'>
                        <p className='flex gap-2 items-center font-semibold w-1/3'><div className='dot bg-yellow-300'></div>In progress</p>
                        <p className='w-1/3 text-center flex items-center justify-center gap-1'><FaClock className='text-gray-400 text-xs' />4hr</p>
                        <div className='w-1/3 flex justify-end'>
                            <BsThreeDots />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-3 items-center w-1/2'>
                        <div className='table-icon-container bg-blue-100'><BsLightningChargeFill /></div>
                        <p>Product Review for UI8 Market</p>
                    </div>
                    <div className='flex gap-3 items-center justify-between w-1/2'>
                        <p className='flex gap-2 items-center font-semibold w-1/3'><div className='dot bg-blue-300'></div>On Hold</p>
                        <p className='w-1/3 text-center flex items-center justify-center gap-1'><FaClock className='text-gray-400 text-xs' />4hr</p>
                        <div className='w-1/3 flex justify-end'>
                            <BsThreeDots />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-3 items-center w-1/2'>
                        <div className='icon-container'><BsLightningChargeFill/></div>
                        <p>Product Review for UI8 Market</p>
                    </div>
                    <div className='flex gap-3 items-center justify-between w-1/2'>
                        <p className='flex gap-2 items-center font-semibold w-1/3'><div className='dot bg-green-300'></div>Done</p>
                        <p className='w-1/3 text-center flex items-center justify-center gap-1'><FaClock className='text-gray-400 text-xs' />4hr</p>
                        <div className='w-1/3 flex justify-end'>
                            <BsThreeDots />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskContainer