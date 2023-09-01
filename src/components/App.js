
import React, { useContext, useState } from "react";
import './../styles/App.css';
import DataContext from "./DataContext";

const App = () => {


  const {data, setData} = useContext(DataContext);
  const [error,setError] = useState('')
  if(data.length === 0){

    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((res)=>setData(res))
    .catch(err=>setError(err))
  }

  
  console.log(data);


  return (

      <div>
        {/* Do not remove the main div */}
        {
          data.length===0 ? <p>Loading...</p> :<div>
          <h1>Data Fetched from API</h1>
          <pre>
          {
            JSON.stringify(data,null,2)
          }
          </pre>
        </div>
        }
        {
          error && <p>{error}</p>
        }

      </div>
  
  )
}

export default App
