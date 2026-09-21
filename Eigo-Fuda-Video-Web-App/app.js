const video = document.getElementById('videoPlayer');
const notice = document.getElementById('videoNotice');
const playButton = document.getElementById('playButton');
const source = './videos/Eigo_Fuda_Otakara_John_Tasukete.mp4';

function showVideoMissingMessage() {
  notice.classList.remove('hidden');
  video.removeAttribute('src');
  video.load();
  playButton.disabled = true;
  playButton.textContent = 'Video Missing';
}

async function checkVideoFile() {
  try {
    const response = await fetch(source, { method: 'HEAD' });
    if (!response.ok) {
      showVideoMissingMessage();
      return;
    }

    video.src = source;
    video.load();
  } catch (error) {
    showVideoMissingMessage();
  }
}

playButton.addEventListener('click', () => {
  if (video.src) {
    video.play();
  }
});

video.addEventListener('error', () => {
  showVideoMissingMessage();
});

checkVideoFile();
