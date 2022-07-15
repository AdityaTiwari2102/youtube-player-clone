import video from './assets/Video.mp4';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, fa4 } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="video-container">
      <div className="video-controls-container">
        <div className='timeline-container'>

        </div>
        <div className='controls'>
          <button className="play-pause-btn">
          </button>
        </div>
      </div>
      <video src={video}></video>
    </div>
  );
}

export default App;
