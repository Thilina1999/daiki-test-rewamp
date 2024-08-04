import React from 'react'

const Button = ({ height, width, bgColor, customStyles, text}) => {
    return (
        <button
          className={`${height} ${width} ${bgColor} ${customStyles} rounded-3.75` } 
        >
          {text}
        </button>
      );
}

export default Button
