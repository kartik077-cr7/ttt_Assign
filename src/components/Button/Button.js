import React from "react";
import './Button.css';

const Button = ({handleClick}) => {
  
	return(
		<div className="button-div">
	   <button className="button" onClick={handleClick}>FETCH WORDS</button>
		</div>
	)
};

export default Button;