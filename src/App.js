import video from './assets/Video.mp4';
import './App.css';
import './player.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="video-container paused">
      <div className="video-controls-container">
        <div className='timeline-container'>

        </div>
        <div className='controls'>
          <button className="play-pause-btn">
            <FontAwesomeIcon icon={faPlay} className="play-icon" />
            <FontAwesomeIcon icon={faPause} className="pause-icon" />
          </button>
        </div>
      </div>
      <video src={video}></video>
    </div>
  );
}

export default App;
