// Music operating
  // Lowering default volume.
myMusic = document.getElementById("music");
myMusic.volume = 0.2;

// Stop music
document.getElementById('stopMusic').addEventListener("click", stopMusic);
function stopMusic() {
  myMusic.pause();
};

// Play music
document.getElementById('playMusic').addEventListener("click", playMusic);
function playMusic() {
  myMusic.play();
};
