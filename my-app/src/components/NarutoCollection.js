import React from 'react'
import NarutoCard from './NarutoCard'

const NarutoCollection = (props, deleteNinja) => {

    const renderNinja = () => {
        return props.ninja.map(shin => <NarutoCard deleteNinja={props.deleteNinja}  key={shin.id} shin={shin} />)
    }

    return (
        <div id="naruto-collection" >
            {renderNinja()}
        </div>
    )
}

export default NarutoCollection