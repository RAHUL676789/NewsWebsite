import { useEffect, useState } from 'react'

import './App.css'
import Search from './Search'
import Pagination from './Pagination'
import MovingPage from './Storage';
import CircularProgress from '@mui/material/CircularProgress';


function App() {


  // calling api funciton 

async function APiCall(APi){
  
  let result ;

  setState((prevd)=>({
    ...prevd,
    isLaoding:true
  }))



   let data = await fetch(APi);
   result=await data.json()
   console.log(result);

   setState((prev) => ({
    ...prev,
    hits: result.hits,
    nbPages: result.nbPages,
    page: result.page,
    isLaoding:false
    
  }));

   
}


//  declaratioin of state  ....
 let [state,setState] = useState({
  
  page:0,
  nbPages:0,
  query:"React",
  hits:[],
  isLaoding:false

 })


//  function of new page

 function newPage(){

  if(state.page >= 50){
    setState((prev)=>({
      ...prev,
      page:0
    }));
  
  }
  else{
    setState((prev)=>({
      ...prev,
      page:prev.page+1
    }));

  }
  
 
 }



//  function of previous page

 function previousPage(){

  if(state.page >=0){
    setState((prev)=>({
      ...prev,
      page:0
    }));
  }
  else{

    setState((prev)=>({
      ...prev,
      page:prev.page-1
    }));
  }
 


 }


//  function of queryUpdate ....

  function queryUpdate(inputVal) {
    console.log("hello");
    
    setState((prevData) => ({
      ...prevData,
      query: inputVal,
    
    }));
  }



  // function of deleteElement/...

  let deleteElement = (id)=>{
    setState((prev) => ({
      ...prev,
      hits: prev.hits.filter((ele)=>ele.objectID !== id),
     
      
    }));
   

  }



  // useEffect function...

 useEffect(()=>{
  APiCall(`https://hn.algolia.com/api/v1/search?query=${state.query}&&page=${state.page}`)
},[state.query,state.page])



// return statement
  return(
    <div className='mainContent'>

    <h2>Rahul Technical  News Website</h2>

    
    <Search data={state} inputChange={queryUpdate}/>

    <MovingPage spanData = {state}  nextPage = {newPage}  prePage={previousPage}/>

    {state.isLaoding && <h1 className='loader'>
      Loading...
      <CircularProgress color="inherit"/>
      </h1>}

    <Pagination cardData = {state} deleteElement = {deleteElement}/>
   
    </div>
  )
}

export default App
