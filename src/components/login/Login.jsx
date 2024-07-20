import { useState } from 'react'
import './login.css'
import toast from 'react-hot-toast'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'
import upload from '../../lib/upload'

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.target)
        const { email, password } = Object.fromEntries(formData)

        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const formData = new FormData(e.target)

        const { username, email, password } = Object.fromEntries(formData)

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const imgUrl = await upload(avatar.file)

            await setDoc(doc(db, "users", res.user.uid), {
                id: res.user.uid,
                username,
                email,
                avatar: imgUrl,
                blocked: [],
            })

            await setDoc(doc(db, "userChats", res.user.uid), {
                chats: [],
            })

            toast.success("Signup Successful! You can login now.")
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className='login'>
            <div className="item">
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder='Email' name="email" required />
                    <input type="password" placeholder='Password' name="password" required />
                    <button disabled={isLoading}>{isLoading ? "Loading..." : "Sign In"}</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleSignup}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an Image
                    </label>
                    <input type="file" name="file" id="file" style={{ display: 'none' }} onChange={handleAvatar} />
                    <input type="text" placeholder='Username' name="username" required />
                    <input type="email" placeholder='Email' name="email" required />
                    <input type="password" placeholder='Password' name="password" required />
                    <button disabled={isLoading}>{isLoading ? "Loading..." : "Sign Up"}</button>
                </form>
            </div>
        </div>
    )
}

export default Login