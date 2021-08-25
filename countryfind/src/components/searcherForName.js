import React from 'react'
import { useCountrie } from '../hooks/useCountrie'
import { CountryDetail } from './single_country_detail'
import { Spinner } from './Spinner'

export function SearcherforName({params}){
    const {country, loader} = params
    var keyword
    if (country.length === 3 || country.length < 3 ) {
        keyword = `alpha?codes=${country}`
    }
    else{
        keyword = `name/${country}`
    }
    const {countries} = useCountrie(keyword)
     
    if(loader){return <Spinner/>}
    
    return(
        <>
            <div className='content2' >
                <CountryDetail countries={countries} />  
            </div>
        </>
    )
}