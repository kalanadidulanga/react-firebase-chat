import { useEffect, useState } from 'react'
import './chatlist.css'
import AddUser from './addUser/AddUser'
import { useUserStore } from '../../../lib/userStore'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../lib/firebase'

const ChatList = () => {
    const [chats, setChats] = useState([])
    const [addMode, setAddMode] = useState(false)
    const { currentUser } = useUserStore()

    useEffect(() => {
        const unsub = onSnapshot(doc(db, 'userChats', currentUser.id), async (res) => {
            const items = res.data().chats;

            const promises = items.map(async (item) => {
                const userDocRef = doc(db, 'users', item.receiverId)
                const userDocSnap = await getDoc(userDocRef)

                const user = userDocSnap.data()

                return { ...item, user }
            })

            const chatData = await Promise.all(promises)
            setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt))
        })

        return () => {
            unsub()
        }
    }, [currentUser.id])

    // console.log(chats);

    return (
        <div className='chatlist'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder='Search...' />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='add' onClick={() => setAddMode(prev => !prev)} />
            </div>

            {chats?.map((chat) => (
                <div className="item" key={chat?.chatId}>
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Kalana Didulanga</span>
                        <p>{chat?.lastMessage}</p>
                    </div>
                </div>
            ))}

            {addMode && <AddUser />}
        </div>
    )
}

export default ChatList