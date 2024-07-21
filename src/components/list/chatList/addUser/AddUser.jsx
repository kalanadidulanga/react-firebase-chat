import { collection, getDocs, query, where } from 'firebase/firestore'
import './addUser.css'
import { db } from '../../../../lib/firebase'
import { useState } from 'react'

const AddUser = () => {
  const [user, setUser] = useState(null);

  const handleAdd = async () => {

  }

  const handleUser = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')

    try {
      const userRef = collection(db, 'users')

      const q = query(userRef, where('username', '==', username))
      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data())
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='addUser'>
      <form onSubmit={handleUser}>
        <input type="text" placeholder='Username...' name='username' />
        <button type='submit'>Search</button>
      </form>

      {user &&
        <div className='user'>
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="" />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd}>Add User</button>
        </div>
      }
    </div>
  )
}

export default AddUser