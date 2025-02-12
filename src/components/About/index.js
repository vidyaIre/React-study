import React from 'react'

const About = () => {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textDecoration: "underline",
                backgroundColor: "green",
                color: "white",

            }}
            >
                <h1>About Component1</h1>
                <h1>Hello World</h1>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: '20px',
            }}
            >
                <h1 className='color'>Hi</h1>
            </div>
            <div className="centerDiv">
                <h1>Hello World2</h1>
            </div>


        </>
    )
}

export default About