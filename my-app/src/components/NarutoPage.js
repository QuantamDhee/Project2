import React, { Component } from "react";
import NarutoCollection from './NarutoCollection'
import NarutoForm from './NarutoForm'
import { Route } from 'react-router-dom'

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
            <div>
                <header> Naruto Thangz </header>
                <NarutoForm addNinja={this.addNinja} />
                <NarutoCollection deleteNinja={this.deleteNinja} ninja={this.state.filteredNinja} />
            </div>
        )
    }
}

export default NarutoPage