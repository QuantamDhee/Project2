import React from 'react'
// import reactDom from 'react-dom'
import NarutoCollection from './NarutoCollection'
import NarutoForm from './NarutoForm'

const url = 'http://localhost:3000/ninja'

class NarutoPage extends React.Component{

    state ={
        ninja: [],
        filteredNinja: [],
    }

    componentDidMount() {
        fetch('http://localhost:3000/ninja')
        .then(r => r.json())
        .then(ninjaArr => this.setState({
            ninja: ninjaArr,
            filteredNinja: ninjaArr
        }))
    }

    render(){
        return(
            <NarutoCollection ninja={this.state.filteredNinja}/>
        )
    }
}

export default NarutoPage