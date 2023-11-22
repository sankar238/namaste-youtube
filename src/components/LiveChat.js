import { useEffect ,useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utilities/chatSlice';
import { generateRandomName, generateRandomMessage } from '../utilities/helper';

const LiveChat = () => {
    const [liveMessage,setLiveMessage] =useState("")
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessages({
                name: generateRandomName(),
                message: generateRandomMessage()
            }))
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    return (
        <>
            <div className="border border-black m-2 mb-0 p-2 w-full h-[600px] overflow-y-scroll flex flex-col-reverse">
                <div>
                    {chatMessages.map((c, i) => (
                        <ChatMessage key={i + 1} name={c.name} message={c.message} />
                    ))}
                </div>
            </div>
            <form 
            className="w-full ml-2 p-2  flex border border-black"
            onSubmit={(e)=>{
                console.log("ONForm Submit")
                 e.preventDefault()
                 dispatch(addMessages({
                    name : "sankar",
                    message:liveMessage
                 }))
                 setLiveMessage("")
                } }
            >
                <input
                    className='w-72 '
                    type='text'
                    value={liveMessage}
                    onChange={(e)=>{setLiveMessage(e.target.value)}}
                />
                <button className='px-2 mx-2 bg-green-200'>Send</button>
            </form>
        </>
    )
}

export default LiveChat