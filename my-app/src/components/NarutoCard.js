import React from 'react'

class NarutoCard extends React.Component {

    handleDelete = (e) => {
        // console.dir(e.target.parentNode)
        this.props.deleteNinja(this.props.shin.id, e.target.parentNode)
    }

    render() {
        const { name, img } = this.props.shin

        return (
            <div className="narutoCard">
                <br></br>
                <h4>{name}</h4>
                <img src={img} alt={name} className='shin-img' />
                <br></br>
                {/* <button className='info-btn'>👀</button> */}
                <button onClick={this.handleDelete} className='del-btn'>❌</button>
            </div>
        )
    }
}

export default NarutoCard