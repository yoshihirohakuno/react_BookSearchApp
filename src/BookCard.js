import React from 'react';

const BookCard = (props) => {
    return(
         <div className="card-container">
             <img src={props.image} alt=""/>
             <div className="desc">
                 <h2>{props.title}</h2>
                 <h3>{props.author}(著)</h3>
                 <p>出版日:{props.published === '0000'?'Not available':props.published.substring(0, 4)}</p>
             </div>    
         </div>    
    )
}

export default BookCard;