import './taskComponent.css'
import { BsThreeDots } from "react-icons/bs";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import axios from 'axios';
import { useEffect, useState } from 'react';


const TaskContainer = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        const getTableData = async () => {
            try {
                const { data } = await axios.get('https://6874fb14dd06792b9c9628ae.mockapi.io/api/data/data');
                console.log(data);
                setTableData(data)
            } catch (error) {
                console.error(error);
            }
        }
        getTableData()
    }, [])

    const dateFormat = (date) => {
        const formatDate = date.split("T")[0]
        return formatDate;
    }

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
                {
                    tableData.map((data) => (
                        <div key={data.id} className='flex justify-between hover:bg-gray-200'>
                            <div className='flex gap-3 items-center w-1/2'>
                                <div className='table-img bg-gray-100'>
                                    <img src={data.avatar} alt="" />
                                </div>
                                <p>{data.name}</p>
                            </div>
                            <div className='flex gap-3 items-center justify-between w-1/2'>
                                <p className='flex gap-2 items-center font-semibold w-1/3'><div className='dot bg-yellow-300'></div>In progress</p>
                                <p className='w-1/3 text-center flex items-center justify-center gap-1'><FaClock className='text-gray-400 text-xs' />{dateFormat(data.createdAt)}</p>
                                <div className='w-1/3 flex justify-end'>
                                    <BsThreeDots />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TaskContainer