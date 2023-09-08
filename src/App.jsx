import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const video = useRef(null);
  const canvas = useRef(null);
  useEffect(() => {

    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 1980 },
      video: { frameRate: { ideal: 100, max: 100 } },
    }).then((mediaStream) => {
      video.current.srcObject = mediaStream;
      video.current.play();
      const canvas2=canvas.current;
      const ctx=canvas2.getContext('2d');
    
      setInterval(() => {
        canvas2.height=video.current.videoHeight;
        canvas2.width=video.current.videoWidth;
        ctx.drawImage(video.current,0,0,video.current.videoWidth,video.current.videoHeight);
      }, 1000);
    })
    .catch((err) => {
        // always check for errors at the end.
        console.error(`${err.name}: ${err.message}`);
      });

    return () => {

    }
  }, [])

  return (
    <>
      <div className='container'>
        <div className="video-container">
          <video ref={video} hidden muted></video>
          <canvas ref={canvas}></canvas>
        </div>
      </div>
    </>
  )
}

export default App
