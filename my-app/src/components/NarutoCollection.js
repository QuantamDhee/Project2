import React from 'react'
import NarutoCard from './NarutoCard'

const NarutoCollection = (props) => {

    const renderNinja = () => {
        return props.ninja.map(shin => <NarutoCard key={shin.id} shin={shin} />)
    }

    return (
        <div id="naruto-collection" >
            {renderNinja()}
        </div>
    )
}

export default NarutoCollection