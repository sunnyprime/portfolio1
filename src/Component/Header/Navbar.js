import React from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

export default function Navbar() {
    return (
        <div className="navContainer">
            <LeftNav />
            <RightNav />
        </div>
    )
}
