import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
    return(
        <div>
            <h1> Naruto Information</h1>
            <p>something about something for something information</p>
            <Link to='/' className='item-frontP'>Front Page</Link>
            <Link to='/ninja/addNinja' className='item-addChar'>Want To Add Ninja 😏?</Link>
        </div>
    )
}