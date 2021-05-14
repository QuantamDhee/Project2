import React from 'react'
import NarutoCard from './NarutoCard'
import { Link } from 'react-router-dom'

const NarutoCollection = (props, deleteNinja, chooseNinja) => {

    const renderNinja = () => {
        return props.ninja.map(shin => <NarutoCard chooseNinja={props.chooseNinja} deleteNinja={props.deleteNinja} key={shin.id} shin={shin} />)
    }

    return (
        <div id="naruto-collection" >
             {/* <Link to='/' className='item-home'>Go Home 😥?</Link> */}
            {renderNinja()}
        </div>
    )
}

export default NarutoCollection