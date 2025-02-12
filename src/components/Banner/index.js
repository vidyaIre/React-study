import React from 'react'
import Button from '../Button'

const Banner = () => {
    return (
        <div
            style={{
                backgroundColor: 'gray',
                height: '200px',
                display: 'flex',
                flexDirection:"column",
                justifyContent: 'center',
                alignItem: 'center',
                color: 'yellow',
            }}
        ><h1>Banner Page</h1>
        <Button/>
        </div>
    )
}

export default Banner