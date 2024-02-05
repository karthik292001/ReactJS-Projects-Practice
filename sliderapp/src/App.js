import './index.css'
import React, { useState } from 'react';

import video1 from './assets/SampleVideo1.mp4';
import video2 from './assets/SampleVideo2.mp4';
import video3 from './assets/SampleVideo3.mp4';




function App() {

  const sliders=new Array();
  sliders[0]=<video src={video1}  width="100%" height="300px" autoPlay loop/>
  sliders[1]=<video src={video2}  width="100%" height="300px" autoPlay loop/>
  sliders[2]=<video src={video3}  width="100%" height="300px" autoPlay loop/>
  
  const [slider,setSlider] = useState(1);
  

  function clickedPrevious(){
    if(slider>1){
      setSlider(slider-1)
    }
  }
  function clickedNext(){
    if(slider<3){
       setSlider(slider+1)
    }
  }

  return (
    <div className="page">

      <div className='header'>

      <h1>Welcome to SliderApp</h1>

      </div>

      <div className='number'>

        <div id='p' className={slider==1?"active":" "}>1</div>
        <div id='p' className={slider==2?"active":" "}>2</div>
        <div id='p' className={slider==3?"active":" "}>3</div>

      </div>

      <div className='message'>

       {sliders[slider-1]}
  
      </div>

      <div className='buttons'>
        <button onClick={clickedPrevious}>Previous</button>
        <button onClick={clickedNext}>Next</button>
      </div>

    </div>
  );
}

export default App;
