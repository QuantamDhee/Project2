import React from 'react'
import { Link } from 'react-router-dom'

class NarutoCard extends React.Component {

    handleDelete = (e) => {
        this.props.deleteNinja(this.props.shin.id, e.target.parentNode)
    }

    render() {
        const { name, img } = this.props.shin
        const { shin, chooseNinja} = this.props
        return (
            <div>
            <div className="narutoCard">
         
                <h4>{name}</h4>
                <img src={img} alt={name} className='shin-img' />
                <br></br>
                <button onClick={() => chooseNinja(shin)} className='info-btn'>Info 👀</button>
                <button onClick={this.handleDelete} className='del-btn'>❌</button>
            </div>
            </div>
        )
    }
}

export default NarutoCard