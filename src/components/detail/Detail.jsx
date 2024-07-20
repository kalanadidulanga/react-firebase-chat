import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Kalana Didulanga</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetails">
                <img src={"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"} alt="" />
                <span>Photo_2024_07_20</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetails">
              <img src={"https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"} alt="" />
                <span>Photo_2024_07_20</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img src={"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"} alt="" />
                <span>Photo_2024_07_20</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <button>Blck User</button>
        <button className='logout'>Blck User</button>
      </div>
    </div>
  )
}

export default Detail