// import React from 'react'
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
        <Button name="all"/>
        <Button name="games"/>
        <Button name="music"/>
        <Button name="dance"/>
        <Button name="cricket"/>
        <Button name="football" />
        <Button name="news"/>
        <Button name="cinemas" />
        <Button name="love"/>
    </div>
  )
}

export default ButtonList