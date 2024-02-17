import './App.css';
import React, { useEffect, useState } from 'react';
import Aux from './hoc/Axu';
import Home from './components/Home/Home';
import Couple from './components/Couple/Couple';
import Gallery from './components/Gallery/Gallery';
import Wedding from './components/Wedding/Wedding';
import Pin from "./components/Pin"

function App() {
  const [isView, setIsView] = useState(false)

  // useEffect(() => {
  //   let intervalId;
  
  //   if (isView) {
  //     intervalId = setInterval(() => {
  //       const playPauseButton = document.querySelector('[data-testid="play-pause-button"]')
  //       console.log({playPauseButton})
  //       if (playPauseButton) {
  //         playPauseButton.click();
  //         clearInterval(intervalId); // Giải phóng interval khi nút được nhấp
  //       }
  //     }, 1000);
  //   }
  
  //   return () => clearInterval(intervalId); // Giải phóng interval khi component bị unmount hoặc isView thay đổi
  // }, [isView]);
  

  return (  
    <Aux>
        {!isView && <Pin correctPin="140823" onSuccess={() => setIsView(true)}/>}
        {
          isView && (
            <>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/0OYusiiiDYU33GJYsMzUc0?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              >
              </iframe>
              <Home/>
              <Couple/>
              <Wedding/>
              <Gallery/>
            </>
          )
        }
    </Aux>
  );
}

export default App;
