import React, { useEffect, useState } from "react"
import ChartComponent from "./components/ChartComponent"
import axios from "axios"

const baseURL = 'http://localhost:4000'

function App() {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseURL}/getAffluence`)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
      <div style={{ display:"flex", justifyContent:"center", marginTop:"200px" }}>
        <ChartComponent title={"Affluence pour la journée"} data={data} />
      </div>
  )
}

export default App;
