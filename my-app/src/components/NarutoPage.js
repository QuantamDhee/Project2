import React, { Component } from "react";
import Header from './Header'
import NarutoCollection from './NarutoCollection'
import NarutoForm from './NarutoForm'
import { Route } from 'react-router-dom'
import About from './About'
// import NarutoBackground from '../pic/NarutoBackground.png'

const url = 'http://localhost:3000/ninja'

class NarutoPage extends Component {

    state = {
        ninja: [],
        filteredNinja: [],
        chosenNinja: {}
    }

    componentDidMount() {
        fetch(url)
            .then(r => r.json())
            .then(ninjaArr => this.setState({
                ninja: ninjaArr,
                filteredNinja: ninjaArr
            }))
    }

    addNinja = (ninjaData) => {
        const { name, img } = ninjaData
        const newNinja = {
            name,
            img
        }
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(newNinja)
        }
        fetch(url, config)
            .then(r => r.json())
            .then(newNinja => {
                this.setState({
                    ninja: [newNinja, ...this.state.ninja],
                    filteredNinja: [newNinja, ...this.state.filteredNinja]
                })
            })
    }

    deleteNinja = (id, parentNode) => {
        console.log(id, parentNode)
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch(`http://localhost:3000/ninja/${id}`, configObj)
            .then(r => r.json())
            .then(parentNode.remove())
    }

    render() {
        return (
            <div >
                <Header/>
                <Route path='/ninja/about' component={About}/>
                {/* <NarutoForm addNinja={this.addNinja} /> */}
                {/* <NarutoCollection deleteNinja={this.deleteNinja} ninja={this.state.filteredNinja} /> */}
                <Route path='/ninja/addNinja' render={() => <NarutoForm addNinja={this.addNinja}/>} />
                <Route path='/ninja' render={()=> <NarutoCollection deleteNinja={this.deleteNinja} ninja={this.state.filteredNinja}/>} />
            </div>
        )
    }
}

export default NarutoPage

// style={{ backgroundImage: `url(${NarutoBackground})` }} for background