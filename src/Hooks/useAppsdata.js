import axios from "axios"
import { useEffect, useState } from "react"

const useAppsdata = () =>{
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        axios ('/data.json').then(data=>console.log(data))
    }, [])

    return {apps, loading, error }
}
export default useAppsdata