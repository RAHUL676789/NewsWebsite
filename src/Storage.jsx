
import "./storage.css"

export default function MovingPage({spanData,nextPage,prePage}){

    console.log(spanData);

    function forwardPage(){
        nextPage();
    }

    function backWardPage(){
        prePage()
    }

    return (
        <div className="container">
            <button onClick={backWardPage} className="btn">Prev</button>
            <span>{(spanData.page)+1} | {spanData.nbPages}</span>
            <button onClick={forwardPage} className="btn">Next</button>
        </div>
    )
}