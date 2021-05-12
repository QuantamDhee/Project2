import React from 'react'

class NarutoCard extends React.Component {

    render() {
        const { name, img } = this.props.shin

        return (
            <div className="narutoCard">
                <h2>{name}</h2>
                <img src={img} alt={name} className='shin-img' />
                <br></br>
                <button> 👀 </button>
            </div>
        )
    }
}

export default NarutoCard