import { useState } from "react";
import "./App.css";
//import { Box, Input } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';


function App() {
  const [text, setText] = useState<string>("");
  const [palindrome, setPalindrome] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const reversedText = () => {
    const checkText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = checkText.split("").reverse().join("");
    if (text === "") { 
      alert("Please enter a word or phrase") 
    } 
    else  if (checkText === reversed ) {
      setPalindrome("BINGO!!");
    } 
    else {
      setPalindrome("NOPE!! NOT A MATCH");
    }
  };


  const Help = () => {
    
    alert("Enter a word or phrase to check if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).");

    console.log(Help);
  }

  return (
    <div className="app-container">

      <HelpIcon className="help-icon" fontSize="large"  onClick={Help}/>
      <h1>PALINDROME CHECKER</h1>

      <div className="pali-box">
      <input className="input-box" type="text" placeholder="Enter word or text" value={text} onChange={handleInputChange}/>

      <button onClick={reversedText}>Check</button>

      <h2>{palindrome}</h2>
      </div>
     
    </div>
  );
}

export default App;
