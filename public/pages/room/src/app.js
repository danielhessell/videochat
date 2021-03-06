const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

  // const recorderBtn = document.getElementById('record')
  // recorderBtn.addEventListener('click', recordClick(recorderBtn))

  const socketUrl = 'https://socket-server-videochat.up.railway.app/'
  const socketBuilder = new SocketBuilder({ socketUrl })

  const peerConfig = Object.values({
    id: undefined,
    config: {
      host: "peer-server-videochat.up.railway.app",
      secure: true,
      // port: 9000,
      // host: 'localhost',
      path: '/'
    }
  })
  const peerBuilder = new PeerBuilder({ peerConfig })

  const view = new View()
  const media = new Media()

  const deps = {
    view,
    media,
    room,
    socketBuilder,
    peerBuilder
  }

  Business.initialize(deps)
}

window.onload = onload
