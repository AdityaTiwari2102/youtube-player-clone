const playPauseBtn = document.querySelector(".play-pause-btn")
const video = document.querySelector("video")

const togglePlay = () => {
  video.paused ? video.play() : video.pause()
}

playPauseBtn.addEventListener("click", togglePlay)
