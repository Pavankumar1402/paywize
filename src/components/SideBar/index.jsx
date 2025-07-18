import { GoHome } from "react-icons/go";
import { CiGrid41 } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { RiBubbleChartLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BsDashCircle } from "react-icons/bs";
import logo from '../../assets/images/logo.png'
import './sidebar.css'
import Links from "./links";


const index = () => {

    const menuItems = [
        {
            icon: <GoHome />,
            label: "home"
        },
        {
            icon: <CiGrid41 />,
            label: "Project"
        },
        {
            icon: <FaTasks />,
            label: "Task"
        },
        {
            icon: <RiBubbleChartLine />,
            label: "Team"
        },
        {
            icon: <IoSettingsOutline />,
            label: "Settings"
        },
    ]

    const configItems = [
        {
            icon: <HiOutlineInformationCircle />,
            label: "Help & Information"
        },
        {
            icon: <BsDashCircle />,
            label: "Log out"
        },
    ]
    return (
        <div className="sidebar-container">
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='menu'>
                <ul>
                    {
                        menuItems.map((data, index) => (
                            <Links label={data.label}>{data.icon}</Links>
                        ))
                    }
                </ul>
            </div>
            <div className="bottom-section">
                <div className='ad-container'>
                    <div className="flex flex-col gap-3 align-items-center">
                        <h3 className="text-xl text-center font-bold">Upgrade to Pro</h3>
                        <p className="text-lg text-center">Get 1 month free and unblock</p>
                        <button className="bg-sky-300 hover:bg-sky-400">Upgrade</button>
                    </div>
                </div>
                <div className='settings'>
                    <ul>
                        {
                            configItems.map((data, index) => (
                                <Links label={data.label}>{data.icon}</Links>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default index