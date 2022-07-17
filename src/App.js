import video from './assets/Video.mp4';
import './App.css';
import './player.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="video-container paused">
      <div className="video-controls-container">
        <div className='timeline-container'>

        </div>
        <div className='controls'>
          <button className="play-pause-btn">
            <svg class="play-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
            </svg>
            <svg class="pause-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
            </svg>
            {/* <FontAwesomeIcon icon={faPlay} className="play-icon" />
            <FontAwesomeIcon icon={faPause} className="pause-icon" /> */}
          </button>
          <button className="full-screen-btn">
            <FontAwesomeIcon icon={faExpand} className="open" />
            <FontAwesomeIcon icon={faCompress} className="close" />
          </button>
        </div>
      </div>
      <video src={video}></video>
    </div>
  );
}

export default App;
