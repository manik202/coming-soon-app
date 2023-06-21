import React from 'react'
import "./App.css";



import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';



const App = () => {
return (
    <div className="manik">
      <div className='page'>
      <div className="page_content">
        <h1>Launching Soon</h1>
        <h3>Leave your email and we'll let you know noce the site goes live.</h3>
        
        {/* Flip Clock CountDown */}

        <FlipClockCountdown
        to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        labelStyle={{ fontSize: 10, fontWeight: 800, color:'green' }}
        digitBlockStyle={{ width: 40, height: 60, fontSize: 50,fontWeight:800 ,fontFamily:'revert' }}
        dividerStyle={{ color: 'white', height: 1 }}
        separatorStyle={{ color: 'red', size: '6px' }}
        duration={0.5}
      >
        Finished
      </FlipClockCountdown>
     
      </div>
    </div>
    </div>
  )
}

export default App


 