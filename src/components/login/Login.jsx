import { useState } from 'react'
import './login.css'
import toast from 'react-hot-toast'

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()

        toast.success("Login Successful")
    }

    const handleSignup = (e) => {

    }


    return (
        <div className='login'>
            <div className="item">
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder='Email' name="email" required />
                    <input type="password" placeholder='Password' name="password" required />
                    <button>Sign in</button>
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
                    <button>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login