import React , {useState}from 'react'


export default function TextForm(props) {
  const [text, setText] = useState("");
  
  const convertToCaps = (event) => {
    setText(text.toUpperCase());
    props.showAlert("Converted in upperCase" , "success")
  };
  
  const updateState = (event) => {
    //console.log("state updated");
    setText(event.target.value);
    
  }
  const convertToLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted in lowerCase" , "success")
  }
  const clearText = () => {
    setText("");
    props.showAlert("TextBox cleared" , "success")
  }
  const copyText = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text copied" , "success")
  }
  
  return (
    <>
    <div style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <div>
          <div className="container my-3" >
                  <h2>{props.label}</h2>
                  <textarea className="form-control my-2" id="exampleFormControlTextarea1" rows="8" style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={updateState} />
                  <button className="btn btn-primary mx-1" onClick={convertToCaps} >Convert to uppercase</button>
                  <button className="btn btn-primary mx-1" onClick={convertToLower}>Convert to lowercase</button>
                  <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                  <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
          </div>
      </div>
      <div className="container my-2">
        <h3><b><u>Analysis</u></b></h3>
        <p><b>Word Count : </b>{text.trim().split(" ")[0] === "" ? 0 : text.trim().split(" ").length}</p>
        <p><b>Character count : </b>{text.length}</p>
        <p><b><u>Preview</u></b></p>
        <p>{text}</p>
      </div>
    </div>
    
    </>
    
  )
}
