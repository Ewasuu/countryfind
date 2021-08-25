import React from 'react'
import { Card } from './card'


export function ListOfCards({countries}){
    return(
        <>
            {countries.map( data =>  <Card key={data.name} name={data.name} population={data.population} region={data.region} flag={data.flag} capital={data.capital} />) }
        </>
    )
}