import React, { Component } from "react";
import Header from './Header'
import NarutoCollection from './NarutoCollection'
import NarutoForm from './NarutoForm'
import { Route } from 'react-router-dom'
import About from './About'
import NinjaDetail from "./NinjaDetail";
// import NarutoBackground from '../pic/NarutoBackground.png'

const url = 'http://localhost:3000/ninja'

class NarutoPage extends Component {

    state = {
        ninja: [],
        filteredNinja: [],
        chosenNinja: null
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
        // console.log(ninjaData)
        const { name, img, desc, quotes } = ninjaData
        const newNinja = {
            name,
            img,
            desc,
            quotes,
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

    addQuote = (id, quote) => {
        const quoteObj = this.state.ninja.find((shin) => shin.id === id)
        const newQuotes = quoteObj.quotes
        console.log(id, quote)
        // newQuote.push(quote)

        // fetch(`http://localhost:3000/ninja/${id}`,
        //     this.getConfigObj("PATCH", { quotes: newQuote }))
        //     .then(r => r.json())
        //     .then(this.fetchQuotes())
        // const { quotes } = quoteDetail
        // const newQuote = {
        //     quotes
        // }
        // const configObj = {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify(newQuote)
        // }
        // fetch(`http://localhost:3000/ninja/${id}`, configObj)
        //     .then(r => r.json())
        //     .then(newQuote =>{
        //         this.setState({

        //         })
        //     })
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

    chooseNinja = chosenNinja => {
        this.setState({ chosenNinja })
    }
    closeNinja = () => {
        this.setState({ chosenNinja: null })
    }

    render() {
        return (
            <>
                <Header />
                <Route path='/ninja/about' component={About} />
                <Route path='/ninja/addNinja' render={() => <NarutoForm addNinja={this.addNinja} />} />
                <Route path='/ninja' render={() => this.state.chosenNinja ?
                    <NinjaDetail addQuote={this.addQuote} shin={this.state.chosenNinja} closeNinja={this.closeNinja} /> :
                    <NarutoCollection chooseNinja={this.chooseNinja} deleteNinja={this.deleteNinja} ninja={this.state.filteredNinja} />} />
            </>
        )
    }
}

export default NarutoPage

// style={{ backgroundImage: `url(${NarutoBackground})` }} for background