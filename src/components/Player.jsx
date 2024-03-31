import { useRef, useState } from "react";
export default function Player() {
  const player = useRef()
  const [playerName, setPlayerName] = useState(null);
  // const[submit , setSubmit] = useState(false)
  // const changeHandler = (e) => {
  //   setSubmit(false)
  //   setPlayerName(e.target.value)
  // };
  const buttonHandler = () =>{
    setPlayerName(player.current.value)
    
  }
  return (
    <section id="player">
      {/* <h2>Welcome {playerName ? playerName : 'unknown entity' } </h2> */}
      {/* another shortcut */}
      <h2>Welcome {playerName ?? 'unknown entity' }</h2>
      <p>
        <input 
        type="text"
        // onChange={changeHandler}
        // value={playerName}
        ref={player}
        
        />

        <button onClick={buttonHandler}>Set Name</button>
      </p>
    </section>
  );
}
