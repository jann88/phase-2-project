import React, { useEffect, useState } from "react";
import BookDetails from "./BookDetails";
import './styles/Context.css'

function Context({ books, setBooks }) {

  const [change, setChange] = useState('')
  useEffect(() => {
    fetch("https://my-bookhub-backend.herokuapp.com/books")
      .then((response) => response.json())
      .then((data) => {
       
          setBooks(data)
          console.log(data)
      

      })
      .catch((error) => console.log(error));
  }, [change])

  return (
    <div className="container-fluid">
      
        

          
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publication</th>
              <th>Edition</th>

            </tr>
          


          
            {books?.map((book, i) => (
              
                 <BookDetails
                key={book?.id || i}
                title={book?.title}
                author={book?.author}
                publication={book?.publication}
                edition={book?.edition}
            
                id={book?.id || i } 
                setChange={setChange} />
              

             

            ))
            }
          
        
      </div>
    
  )


}
export default Context;