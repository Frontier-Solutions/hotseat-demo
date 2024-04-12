import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>LnL Video App</h1>
      <div className='card'>
        <video width={1280} height={720} controls>
          <source
            type='video/mp4'
            src='http://pmd.cdn.turner.com/cnn/big/cnn10/2020/11/09/ten-1111.cnn_3470661_ios_1240.mp4'
          />
        </video>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
