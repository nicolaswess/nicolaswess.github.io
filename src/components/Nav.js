import { useState } from "react"

export default function Nav() {
  const [isActive, setActive] = useState(true)
  function handleClick() {
    setActive(!isActive)
    console.log(isActive)
  }
  return(
    <div className="nav" width='75px'>
      <button onClick={handleClick}>
      <img src="../menuIconWhite.png" />
      </button>
      <div className={isActive ? "hidden menu-items" : "menu-items"}>
        <a href='#about'><h2>About Me</h2></a>
        <a href='#research'><h2>Research</h2></a>
        <a href='#cv'><h2>CV</h2></a>
      </div>
    </div>
  )
}