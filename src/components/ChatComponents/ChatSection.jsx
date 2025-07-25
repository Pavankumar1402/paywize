import './chatSection.css'
import profile_icon from '../../assets/images/profile.png'
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import Receiver from './Receiver';
import Sender from './sender';

const ChatSection = () => {
  return (
    <div className='chat-section'>
      <div className='user-banner flex flex-col bg-gray-100'>
        <div className='user-details'>
          <div className="profile-img">
            <img src={profile_icon} alt="profile_img" />
          </div>
          <div className='user-info flex flex-col text-center'>
            <h4>Megan norton</h4>
            <span>@megannorton</span>
          </div>
        </div>
        <div className="contact-container flex gap-3">
          <div className='icon-container'>
            <MdOutlineLocalPhone />
          </div>
          <div className='icon-container'>
            <IoVideocamOutline />
          </div>
          <div className='icon-container'>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      <div className="chat-container flex flex-col">
        <div>
          <Receiver username="Floyd Miles" message={"Commented on Stark Project"} time={"10:15am"} />
          <Sender message={"Lorem, ipsum dolor sit amet consectetur"} />
          <Receiver username="Kristin waston" message={"Commented on Stark Project"} time={"10:15am"} />
          <Sender message={"adipisicing elit. Numquam, cumque!"} />
        </div>
        <input type="text" placeholder='write a message' className='chat-input bg-gray-100' />
      </div>
    </div>
  )
}

export default ChatSection