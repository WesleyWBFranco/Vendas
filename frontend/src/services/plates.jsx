import { useState } from "react"

export default function plateServices() {
    const [plateLoading, setPlateLoading] = useState(false)
    const [refetchPlates, setRefetchPlates] = useState(true)
    const [platesList, setPlatesList] = useState([])

    const url = 'http://localhost:3000/plates'    

    const getAvailablePlates = (userId) => {
        setPlateLoading(true)
         
        fetch(`${url}/availables`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.success)
            {
                setPlatesList(result.body)
            } else {
                console.log(result)
            } 
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setPlateLoading(false)
            setRefetchPlates(false)
        })
    }

    return { getAvailablePlates, plateLoading, refetchPlates, platesList }
} 