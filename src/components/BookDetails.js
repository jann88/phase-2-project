import React, { Fragment,useState} from "react";

 const BookDetails = ({title, author, publication, edition, id }) => {

    function deleteElem(e){
        fetch(`https://my-bookhub-backend.herokuapp.com/books/${id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(r=>r.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
        alert('You\'re delete has been successful')

    }
    


    

    const [isRead, setIsRead] = useState((false))
        
        function markRead({}){
            
            setIsRead(!isRead)

        }
    

            

    return(
        <Fragment>
            <tr id={id}>
            
                <td>{title}</td>
                <td>{author}</td>
                <td>{publication}</td>
                <td>{edition}</td>
          
            </tr>
            



            
             <button onClick={markRead} type="button"  className="btn btn-success btn-xsm" >{isRead ? "READ": "UNREAD"}</button>
            <button id={id} onClick={deleteElem} type="button" className=" btn-danger btn-xsm">🗑</button>
            
           
        
            </Fragment>
    )
          
   };
 
export default BookDetails;