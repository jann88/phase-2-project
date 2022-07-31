import React, { useState } from "react";
import './styles/BookDetails.css'
 const BookDetails = ({title, author, publication, edition, price}) => {
// const [read, setIsRead] = useState(false)
// const [favBook, setFavBook] = useState(false)
// function checkRead(){
//   setIsRead(!read)
  
// }
// function onClickAdd(id,title,author,publication, edition)
// let BookDetails = {id,title,author,publication,edition}
// setFavBook(true)}
// handleFavBook(BookDetails)

// function handleDeleteClick(id) {
//   fetch(`http://localhost:3001/books${id}`, {
//     method: "DELETE",
//   })
//     .then((r) => r.json())
//     .then(() => onDeleteBookDetails(id));
// }
      
// function onDeleteFavBook(id){
//   setFavBook(!favBook)
//   handleRemoveFav(id)
//   const btn =
//     <>
// <button style={{textDecorationLine:favBook?'line-through':''}} onClick={checkRead}>{inner ? "Mark as unread":"Mark as read"}</button>
//       <button
//         style={{ margin: "5px", background: "tomato" }}
//         onClick={() => handleDeleteClick(id)}
//       >Delete</button>
//       <button
//       onClick={()=>favBook ? onDelFavBook(id):onClickAdd(id,title,author,content)}
//         style={{ margin: "5px", background: "aqua" }}
//       >{favBook?'Remove From Favourite':'Add Favourite'}</button>
// </>

    return(
     
        <div>
          <table>
  
        <tcol-col><td>{title}</td></tcol-col>
        <tcol><td>{author}</td></tcol>
        <tcol><td>{publication}</td></tcol>
        <tcol><td>{edition}</td></tcol>
        <tcol><td>{price}</td></tcol>
   
        <button>🗑</button>
      
      </table>
      </div>
       
);
   
          };

export default BookDetails;