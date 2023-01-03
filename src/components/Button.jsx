import React from 'react'

const borderStyle = 'border-2 border-almost-black rounded-lg'
const filledStyles = 'text-almost-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-trasparent hover:text-almost-black border-2 border-almost-black'

const Button = ({
    children = "",
    hasBorder = false,
    isFilled = false
}) => {
    return (
        <button className={`text-medium-gray px-5 py-2 ${hasBorder && borderStyle} ${isFilled && filledStyles}`} >{children}</button>
    )
}

export default Button