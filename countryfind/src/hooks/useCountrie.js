import { useEffect, useState } from "react"
import { getCard } from "../service/getcountries"

export function useCountrie(filter){
    const [countries, setCountries] = useState([])
    const [loader , setLoader] = useState(true)
    useEffect( function(){
        setLoader(true)
        getCard({filter}).then(res => {
            setCountries(res)
            setLoader(false)
        }).catch(res => {
            setLoader(false)
            console.log(res)
        })
    }, [setCountries, filter])

    return {countries,setCountries, loader}
}