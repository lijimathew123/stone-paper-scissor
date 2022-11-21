
import { useState } from 'react';
import './App.css';

function App() {
  

   const [cschoice,setCschoice] = useState('')
   const [userChoice,setUserchoice] = useState('')
   const [computerpoint,setComputerpoint] = useState(0)
   const [userpoint,setUserpoint] = useState(0)

   const ComputerChoice = ['stone','paper','scissors']
   const GenerateRandom = ()=>{

   const index = Math.floor( Math.random()*ComputerChoice.length)
     
     
   const  randomcomputervalue =  ComputerChoice[index]
       
   setCschoice(randomcomputervalue)


  if((userChoice === 'stone' && randomcomputervalue ==='paper') ||(userChoice === 'paper' && randomcomputervalue === 'scissors') ||(userChoice === 'scissors' && randomcomputervalue === 'stone') ){
    setComputerpoint(computerpoint +1)
  } else if((randomcomputervalue === 'stone' && userChoice ==='paper') ||(randomcomputervalue === 'paper' && userChoice === 'scissors') ||(randomcomputervalue === 'scissors' && userChoice === 'stone') ){
    setUserpoint(userpoint +1)
  } else {
    setComputerpoint(computerpoint)
    setUserpoint(userpoint)
  }

 




     }
    
     
  return (
    <div className="app">
       <div className='style'>
                  <h2>Computer Choice:{cschoice} </h2>
                  <h2>User Choice: {userChoice}</h2>
                  <h2>Result: </h2>

                  <img onClick={()=> setUserchoice('stone')}     src='data:image/jpeg;base64,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' alt='image here'></img>
                  <img onClick={()=> setUserchoice('paper')}   src='data:image/jpeg;base64,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' alt='image here'></img>
                  <img onClick={()=> setUserchoice('scissors')}   src='data:image/png;base64,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' alt='image here'></img>
                    
                  <div className='space'></div>
                  <button onClick={GenerateRandom}>Play</button>
                  <h2>User point:{userpoint} </h2>
                  <h2> Computer Point: {computerpoint}</h2>
                



                  {userpoint === 10 && <div><h1>User won</h1></div>}
                  {computerpoint === 10 && <div><h1>Computer won</h1></div>}

          </div>
    </div>
  );
}

export default App;
