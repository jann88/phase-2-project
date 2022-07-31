import React, { useState } from 'react';

const AddBook = () => {
    const [char, setChar] = useState({
        title: '',
        author: '',
        publication: '',
        edition: '',
        price: 0
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/books/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                title: char.title,
                author: char.author,
                publication: char.publication,
                edition: char.edition,
                price: char.price
            })
        })
        .then(r=>r.json())
        .then(d=>console.log(d))
        .catch(error=>console.log(error));
    };

    const handleChange = (e)=>{
        setChar({...char, [e.target.name]: e.target.value})
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <h3>Add book</h3>
            <input placeholder = "Title" name="title" onChange={handleChange} value={char.title}/>
            <input placeholder = "Author" name="author" onChange={handleChange} value={char.author}/>
            <input placeholder = "Publication" name="publication" onChange={handleChange} value={char.publication}/>
            <input placeholder = "Edition" name="edition" onChange={handleChange} value={char.edition}/>
            <input placeholder = "Price" name="price" onChange={handleChange} value={char.price}/>
            <button onClick={handleSubmit}>Add</button>
            <hr/>
        </form>
    )
}
export default AddBook;