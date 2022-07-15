window.onload=function(){
  const playPauseBtn = document.querySelector(".play-pause-btn")
  const videoContainer = document.querySelector(".video-container")
  const video = document.querySelector("video")

  const togglePlay = () => {
    video.paused ? video.play() : video.pause()
  }

  playPauseBtn.addEventListener("click", togglePlay)

  video.addEventListener("play", () => {
    videoContainer.classList.remove("paused")
  })

  video.addEventListener("pause", () => {
    videoContainer.classList.add("paused")
  })
}
