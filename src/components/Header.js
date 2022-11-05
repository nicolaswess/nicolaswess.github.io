import Nav from "./Nav";

export default function Header() {
  return(
    <div className='header'>
      <img src='../Nicologo.png' alt="logo" width='75px' />
      <h2 style={{paddingRight:'2.5%'}}>Nicolas Wesseler</h2>
      <Nav />
    </div>
  )
}