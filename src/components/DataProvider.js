import React, { useState } from "react";

import DataContext from "./DataContext";

const DataProvider=(props)=>{

    const [data, setData] = useState([])

    


    return (
        <DataContext.Provider value={
                {
                    data: data,
                    setData: setData
                }
            }>
            {props.children}
        </DataContext.Provider>
    )
}


export default DataProvider
