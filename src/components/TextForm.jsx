import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let new1 = text.toLocaleUpperCase();
    setText(new1);
  };
  const handlelwClick = () => {
    let new1 = text.toLocaleLowerCase();
    setText(new1);
  };
  const handleclearClick = () => {
    let new1 = "";
    setText(new1);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            name="text"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpClick}>
          Convert To uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={handlelwClick}>
          Convert To lowercase
        </button>
        <button className="btn btn-primary m-1" onClick={handleclearClick}>
          clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
      </div>
    </>
  );
};

export default TextForm;
