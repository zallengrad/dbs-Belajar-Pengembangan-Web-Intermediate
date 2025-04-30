let width = 320;
let height = 0;
let streaming = false;

async function startup() {

  const cameraVideo = document.getElementById('camera-video');
  const cameraCanvas = document.getElementById('camera-canvas');
  const cameraTakeButton = document.getElementById('camera-take-button');
  const cameraOutputList = document.getElementById('camera-list-output');


  function populateTakenPicture(image) {
    // TODO: show taken picture
    cameraOutputList.innerHTML = `
    <li><img src="${image}" alt=""></li>
    `;
  }

  async function getStream() {
    // TODO: menghasilkan kamera string
    try {
      return await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      
    } catch (error) {
      throw error;
    }

  }

  

  function cameraLaunch(stream) {
    // TODO: launch camera on video
    cameraVideo.srcObject = stream;
    cameraVideo.play();

  }

  function cameraTakePicture() {
    // TODO: draw video frame to canvas
    const context = cameraCanvas.getContext('2d');
    cameraCanvas.width = cameraVideo.videoWidth;
    cameraCanvas.height = cameraVideo.videoHeight;
    context.drawImage(cameraVideo, 0, 0, cameraVideo.videoWidth, cameraVideo.videoHeight);

    return cameraCanvas.toDataURL();


  }

  cameraTakeButton.addEventListener('click', () => {
    const imageUrl = cameraTakePicture();
    populateTakenPicture(imageUrl);
  });

  async function init() {
    // TODO: init menjalankan semua fungsi
    try {
      const stream = await getStream();
      console.log(stream);
      cameraLaunch(stream);
    } catch (error) {
      console.error(error);
      alert('Error occurred:', error.message);
    }
  }

  init();
}



window.onload = startup;
