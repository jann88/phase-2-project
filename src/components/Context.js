import React, { useEffect } from "react";
import BookDetails from "./BookDetails";
import './styles/Context.css'

function Context({ books, setBooks }) {


  useEffect(() => {
    fetch("https://my-bookhub-backend.herokuapp.com/books")
      .then((response) => response.json())
      .then((data) => {
        return (
          setBooks(data)
        )
      })
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className="contextcontainer">
      
        

          
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publication</th>
              <th>Edition</th>
              <th>Price</th>
            </tr>
          


          
            {books.map((book, i) => (
              
                 <BookDetails
                key={book.id || i}
                title={book.title}
                author={book.author}
                publication={book.publication}
                edition={book.edition}
                price={book.price} />
              

             

            ))
            }
          
        
      </div>
    
  )


}
export default Context;