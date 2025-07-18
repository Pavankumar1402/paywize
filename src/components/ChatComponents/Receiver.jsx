import './chatSection.css'

const Receiver = ({ username, message, time }) => {
    return (
        <div className='receiver'>
            <div className='flex justify-between'>
                <p className='text-sm'>{username}</p>
                <span className='text-xs'>{time}</span>
            </div>
            <span className='text-xs'>{message}</span>
        </div>
    )
}

export default Receiver