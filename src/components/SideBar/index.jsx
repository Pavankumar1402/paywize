import { GoHome } from "react-icons/go";
import { CiGrid41 } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { RiBubbleChartLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BsDashCircle } from "react-icons/bs";
import logo from '../../assets/images/logo.png'
import './sidebar.css'


const index = () => {
    return (
        <div className="sidebar-container">
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='menu'>
                <ul>
                    <li className="flex gap-2 text-gray-600 hover:text-gray-900 hover:font-semibold"><GoHome /><a href=""> Home</a></li>
                    <li className="flex gap-2 text-gray-600 hover:text-gray-900 hover:font-semibold"><CiGrid41 /> <a href="">Project</a></li>
                    <li className="flex gap-2 text-gray-600 hover:text-gray-900 hover:font-semibold"><FaTasks /><a href="">Task</a></li>
                    <li className="flex gap-2 text-gray-600 hover:text-gray-900 hover:font-semibold"><RiBubbleChartLine /><a href="">Team</a></li>
                    <li className="flex gap-2 text-gray-600 hover:text-gray-900 hover:font-semibold"><IoSettingsOutline /><a href="">Settings</a></li>
                </ul>
            </div>
            <div className="bottom-section">
                <div className='ad-container'>
                    <div className="flex flex-col gap-3 align-items-center">
                        <h3 className="text-2xl text-center">Upgrade to Pro</h3>
                        <p className="text-lg text-center">Get 1 month free and unblock</p>
                        <button className="bg-sky-300 hover:bg-sky-400">Upgrade</button>
                    </div>
                </div>
                <div className='settings'>
                    <ul>
                        <li className="flex gap-2 text-gray-600 hover:text-gray-900 hover:font-semibold"><HiOutlineInformationCircle /><a href="">Help & Information</a></li>
                        <li className="flex gap-2 text-gray-600 hover:text-gray-900 hover:font-semibold"><BsDashCircle /><a href="">Log out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default index