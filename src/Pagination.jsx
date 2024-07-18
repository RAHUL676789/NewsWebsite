

import "./pagination.css"
// import deleteElement from "./App.jsx";

export default function Pagination({ cardData,deleteElement }) {
    let { history, nbPages, page, hits } = cardData;

    function hanleDelete(id){
       deleteElement(id);
    }
    return (
        <div>
            {hits.map((element) => (
                <div key={element.objectID} className="cardDetail">


                    <h2 className="title">{element.title}</h2>

                    <div className="detail"> 

                         <i>By</i>&nbsp;  &nbsp; <span>{element.author}</span>

                          &nbsp;| &nbsp;<span>{element.num_comments}</span>&nbsp;Comments
                          
                          </div>


                    <div className="detail2"> 
                                 <a href={element.url} className="ReadMore" target="_blank">Read More</a>   
                                  <a href="#" className="Remove" onClick={()=>hanleDelete(element.objectID)}>Remove</a>
                         </div>
                </div>

            ))}

        </div>
    )
} 