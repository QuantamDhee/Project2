import React, { Component } from "react";
import NarutoCollection from './NarutoCollection'
import NarutoForm from './NarutoForm'

const url = 'http://localhost:3000/ninja'

class NarutoPage extends Component {

    state = {
        ninja: [],
        filteredNinja: [],
    }

    componentDidMount() {
        fetch(url)
            .then(r => r.json())
            .then(ninjaArr => this.setState({
                ninja: ninjaArr,
                filteredNinja: ninjaArr
            }))
    }

    render() {
        return (
            <div>
            <header/> 
            <NarutoCollection ninja={this.state.filteredNinja} />
            </div>
            )
    }
}

export default NarutoPage