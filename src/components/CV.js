export default function CV() {
  return(
    <div id='cv'>
      <h3>CV</h3>
      <div className="cvItems">
        <button><a href='../resume.pdf' download>Download</a></button>
        <iframe src='../resume.pdf' width='75%' height='800px' />
      </div>
    </div>
  )
}