import React, { useState } from 'react'

export default function Form2(props) {

  const hadleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value)
  }

  const hadleUpClick =() => {
    props.showAlert("Convert to upperCase", "success")
    var newText = text.toUpperCase()
    setText(newText)
  }

  const hadleLoClick =() => {
    var newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Convert to LowerCase", "success")
  }

  const hadleCoClick = () => {
    var newText = document.getElementById('myBox')
    newText.select();
    navigator.clipboard.writeText(newText.value)
    props.showAlert("Copy text to Clipboard", "success")
  }

  const hadleReClick = () => {
    var newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("remove extra spaces", "success")
  }

  const hadleClClick = () => {
    let newText = ''
    setText(newText)
    props.showAlert("Clear text", "success")
  }

  const [text, setText] = useState('Enter text here')

  return (
    <>
    <div className='container my-2' >
      <h1>{props.heading}</h1>
      <div className="input-group container my-4">
      <textarea className="form-control" value={text} onChange={hadleOnChange} id='myBox' rows="8"></textarea>
      </div>
      <button className="btn btn-dark mx-1" onClick={hadleUpClick}>convert To UpperCase</button>
      <button className="btn btn-dark mx-1" onClick={hadleLoClick}>convert To LowerCase</button>
      <button className="btn btn-dark mx-1" onClick={hadleCoClick}>Copy</button>
      <button className="btn btn-dark mx-1" onClick={hadleReClick}>remove Extra Space</button>
      <button className="btn btn-dark mx-1" onClick={hadleClClick}>clear Text</button>
    </div>
    <div className='container'>
      <p>{text.split(" ").length} word and, {text.length} charecter</p>
      <p>{0.08 * text.split(" ").length} Minutes Read</p>
      <h4>Priview Text</h4>
      <p>{text}</p>
    </div>
    </>
  )
}
