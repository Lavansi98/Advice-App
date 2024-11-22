
import { useState } from 'react'


const AdviceApp = () => {
  const [advice, setAdvice] =  useState('Please click button to get advice');

  const [count,setCount] = useState(0);
  
  async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice)
    setCount((a)=>a+1);
  }

  return (
    <div>
    <img src="img-adviceApp.jpg" alt="" />
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You have read <b>{count}</b> pieces of advice</p>
    </div>
  )
}

export default AdviceApp
