import React from 'react'
import NarutoCard from './NarutoCard'

const NarutoCollection = (props) => {

    const rasengan = () => {
        return props.ninja.map(shin => <NarutoCard key={shin.id} shin={shin} />)
    }

        return(
            <div id="naruto-collection" >
                {rasengan()}
            </div>
        )
}

export default NarutoCollection