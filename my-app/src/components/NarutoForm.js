import React from 'react'
import { Link } from 'react-router-dom'

class NarutoForm extends React.Component {

    state = {
        name: '',
        img: '',
        desc: '',
        quotes: [],
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNinja(this.state)
        this.setState({
            name: '',
            img: '',
            desc: '',
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Add member</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="name" placeholder="Enter a ninja's name" value={this.state.name} onChange={this.handleChange} />
                        <input type="text" name="img" placeholder="Enter a ninja's image URL" value={this.state.img} onChange={this.handleChange} />
                        <br />
                        <input type="text" name="desc" placeholder="Enter a ninja's description" value={this.state.desc} onChange={this.handleChange} />
                        <br/>
                        <input type="submit" name="submit" className="submit" />
                      
                    </div>
                    <div>
                        <br/>
                    <Link to='/ninja' className='item-viewNinja'><button> View Ninjas🐱‍👤</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default NarutoForm