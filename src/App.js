import React,{useState} from 'react';
import './App.css';
const Square=(props)=>
{
  
   return(
     <button className="square" onClick={props.fun}>
       {props.value}
     </button>
   )
}
const Board=()=>
{
  const init=Array(9).fill(null);
   const[square,setsquares]= useState(init);
   const [count,setcount]=useState(0);
  
   function set(){
     if(count===9)
     return `--------Game-Ends-----------`
   if(count%2)
    return`player 2 turn`
    if(count%2===0)
    return `player 1 turn`
   
   }
    const handleClick=(i)=>
    {
      const temp={...square}
      const p={count};
     // console.log(p)
     if(temp[i]==='x'||temp[i]==='o')
     return null;
       if(p.count%2)
      temp[i]='x'
     else
    temp[i]='o'
      
    setcount(count+1)
         setsquares(
           temp
         )
        
  
    }
    const Helper=({count})=>
    {
      let temp=count
       const sq={...square};
      
           let ch
           if(count%2===0)ch='x'
           else ch='o'
         
          if((sq[0]===ch&&sq[3]===ch&&sq[6]===ch)||(sq[1]===ch&&sq[4]===ch&&sq[7]===ch)||(sq[2]===ch&&sq[5]===ch&&sq[8]===ch))
          {
            
            setsquares(init)
            setcount(0)
            if(temp%2===0)
            alert( `player2 wins!!!`)
            else
            alert(`player1 wins!!`)
          }

          if((sq[0]===ch&&sq[1]===ch&&sq[2]===ch)||(sq[3]===ch&&sq[4]===ch&&sq[5]===ch)||(sq[6]===ch&&sq[7]===ch&&sq[8]===ch))
          {
            setsquares(init)

            setcount(0)
            if(temp%2===0)
            alert( `player2 wins!!!`)
            else
            alert(`player1 wins!!`)
          }
          if((sq[0]===ch&&sq[4]===ch&&sq[8]===ch)||(sq[2]===ch&&sq[4]===ch&&sq[6]===ch))
          {
            setsquares(init)
            setcount(0)
            if(temp%2===0)
            alert( `player2 wins!!!`)
            else
            alert(`player1 wins!!`)
          }
         
          if(count===9)
          return `-------------Draw--------------`
          else
          return `-----------Ongoing------------`
    }
    
  return(

    <div className="board"> 
    {Helper({count})}<br />
    {set()}
     
    <div className="boarddiv"><Square value={square[0]} fun={()=>handleClick(0)}></Square>
    <Square value={square[1]} fun={()=>handleClick(1)}></Square>
    <Square value={square[2]} fun={()=>handleClick(2)}></Square></div>
    <div className="boarddiv"><Square value={square[3]} fun={()=>handleClick(3)}></Square>
    <Square value={square[4]} fun={()=>handleClick(4)}></Square>
    <Square value={square[5]} fun={()=>handleClick(5)}></Square></div>
    <div className="boarddiv"><Square value={square[6]}fun={()=>handleClick(6)}></Square>
    <Square value={square[7] } fun={()=>handleClick(7)}></Square>
    <Square value={square[8]} fun={()=>handleClick(8)}></Square></div>
    </div>
  )
}

function App() {
  return (
    <div className="main">
      <p className="heading">Tic-Tac-Toe</p>
      <Board></Board>
    </div>
  );
}

export default App;
