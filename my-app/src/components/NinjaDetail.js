import React from 'react'

export default function NinjaDetail(props, shin, closeNinja, addQuote) {

    const { name, img, desc, quotes} = props.shin


    // const handleChange = (e) =>{
    //    return ''
    // }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(e.target.quote)
        props.addQuote(e.target.quotes.value, props.shin.id)
    }

    // const showQuote = () =>{
    //     quotes.map((quote) => (
    //         <li key={quote}> {quote}</li>
    //     ))
    // }


    return (
        <div>
            <div className="header"> {name}</div>
            <div className='img'>
                <img src={img} alt={name} className="shin-img" />
            </div>
            <div>
                <div className="desc">Description: {desc}</div>
            </div>
            <div>
                <div className="quotes"> Quotes:{quotes.map((quote)=>{return <li>{quote}</li>})}</div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="quotes" placeholder='enter quote' />
                <input type="submit" name="submit" className="submit" />
            </form>
            </div>
            <button onClick={props.closeNinja} className="bottom attached">back</button>
        </div>
    )
}