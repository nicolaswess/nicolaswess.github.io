import { useState } from "react"

export default function Nav() {
  function handleClick() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  return(
<div class="nav">
  <button onClick={handleClick} class="dropbtn"><img src='../menuIconWhite.png'></img></button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#about">About</a>
    <a href="#research">Research</a>
    <a href="#cv">CV</a>
  </div>
</div>
  )
}