// import React from 'react'

import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const SideBar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if (!isMenuOpen) return null;

    return (
        <div className="p-5 shadow-lg w-40">
            <ul>
                <Link to="/"> <li className="font-semibold">Home </li></Link>
                <li>Shorts </li>
                <li>Videos </li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold pt-5">subsciptions</h1>
            <ul>
                <li>movies </li>
                <li>sports </li>
                <li>music </li>
                <li>gaming</li>
            </ul>
            <h1 className="font-bold pt-5 ">watch later</h1>
            <ul>
                <li>movies </li>
                <li>sports </li>
                <li>music </li>
                <li>gaming</li>
            </ul>
        </div>

    )
}

export default SideBar