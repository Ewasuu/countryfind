import React from 'react'
import { useCountrie } from '../hooks/useCountrie'
import  Form  from './form'
import { ListOfCards } from "./ListOfCard"
import { Spinner } from './Spinner'

export function SearcherforRegion({params}){
    const {region} = params
    const {countries, loader} = useCountrie(`region/${region}`)

    if(loader){return <Spinner/>}
    
    return(
        <>
            <Form/>
            <div className='content' >
                    <ListOfCards countries={countries}/>
            </div>
        </>
    )
}