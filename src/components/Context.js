import React, { useEffect } from "react";
import BookDetails from "./BookDetails";
import './styles/Context.css'

function Context({ books, setBooks }) {

  
  useEffect(() => {
    fetch("http://localhost:3001/books")
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
      <div className="sidebar">
     <table> 
     
      <thead>
      <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publication</th>
          <th>Edition</th>
          <th>Price</th>
        </tr>
      </thead>
      

      <tbody>
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
      </tbody>
      </table>
    </div>
    </div>
  )


}
export default Context;