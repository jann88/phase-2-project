import React, {useNavigate,useState } from 'react';
import Home from './Home';
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
        fetch(`https://my-bookhub-backend.herokuapp.com/books`, {
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
                //price: char.price
            })
        })
        .then(r=>r.json())
        .then(d=>console.log(d))
        .catch(error=>console.log(error));
        document.querySelector('.form').reset()
    };

    const handleChange = (e)=>{
        setChar({...char, [e.target.name]: e.target.value})
     
       
    }
    // function Redirect () {
    //     let navigate = useNavigate();
    //     function handleSubmit() {
    //         navigate('/home')

    
   
    return (
        
        <>
            <h3>Add book</h3>
            <form onSubmit={handleSubmit} className='form'>
            <div className='title'>
            </div>
            <input type="text" className='form-control' placeholder = "Title" name="title" onChange={handleChange} value={char.title}/>
            <input type="text" className='form-control' placeholder = "Author" name="author" onChange={handleChange} value={char.author}/>
            <input type="text" className='form-control' placeholder = "Publication" name="publication" onChange={handleChange} value={char.publication}/>
            <input type="text" className='form-control' placeholder = "Edition" name="edition" onChange={handleChange} value={char.edition}/>
            {/* <input type="text" className='form-control'placeholder = "Price" name="price" onChange={handleChange} value={char.price}/> */}
            <button type="button" className="btn btn-success primary btn-sm" onClick={handleSubmit}>Add</button>
            <hr/>
            </form>
            
        </>
    )
    
    }

export default AddBook;


















