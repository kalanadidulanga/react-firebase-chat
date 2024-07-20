import { useState } from "react";
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [user, setUser] = useState(true);

  return (
    <div className='container'>
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <>
          <Login />
        </>
      )}

      <Toaster />
    </div>
  )
}

export default App