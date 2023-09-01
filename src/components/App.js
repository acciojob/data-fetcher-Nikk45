
import React, { useContext } from "react";
import './../styles/App.css';
import DataContext from "./DataContext";

const App = () => {


  const {data, setData} = useContext(DataContext);

  if(data.length === 0){

    fetch("https://dummyjson.com/products")
    .then((res)=>res.text())
    .then((res)=>setData(res))
  }

  
  console.log(typeof data);

  return (

      <div>
        {/* Do not remove the main div */}
        {
          data.length===0 && <p>Loading...</p>
        }
        {
          data && <div>
            <h1>Data Fetched from API</h1>
            <pre>{data}</pre>
          </div>
        }

      </div>
  
  )
}

export default App
