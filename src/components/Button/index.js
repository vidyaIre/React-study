import React from 'react'

const Button = () => {
  return (
    <button 
        style={{
            backgroundColor:"blue",
            height:"30px",
            display:"flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems: "center",
            color:"white",
        }}
    >
        Click Me to open Alert!
    </button>
  )
}

export default Button