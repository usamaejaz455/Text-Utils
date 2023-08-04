import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const clearText = () => {
    setText("");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const convertToSentenceCase = () => {
    const words = text.trim().split(/\s+/);
    const sentenceCaseWords = words.map((word) =>
      word.length > 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word
    );
    const sentenceCaseText =
      sentenceCaseWords.join(" ") === ""
        ? ""
        : sentenceCaseWords.join(" ").charAt(0).toUpperCase() +
          sentenceCaseWords.join(" ").slice(1);
    setText(sentenceCaseText);
  };

  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard:', text);
      })
      .catch(err => {
        console.error('Failed to copy text:', err);
      });
  };

  return (
    <>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={toUpper}>ConvertToUpperCase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={toLower}>ConvertToLowerCase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={clearText}>ClearText</button>
        <button className="btn btn-primary my-2 mx-1" onClick={convertToSentenceCase}>SentenceCase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={copyToClipboard}>Copy Text</button>
      </div>
      <div className="conatiner">
        <h3>Your Text Summary</h3>
        <p>{wordCount} Words</p>
        <p>{text.length} Characters</p>
        <h3>Preview of your Text</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
