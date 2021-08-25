import React from 'react'
import { Link } from 'wouter'

export function Card({name, population, region, flag, capital}){
    
    return(
        <div  className='card' >
            <Link to={`/name/${name}`} >
            <div className='card__image' >
                <img className='card__image-image' alt={name} src={flag} />
            </div>
            <div className='card__info'>
                <h3 className='card__info-title' >{name}</h3>
                <p className='card__info-data' ><strong className='card__info-strong' >Population:</strong> {population}</p>
                <p className='card__info-data' ><strong className='card__info-strong' >Region:</strong> {region}</p>
                <p className='card__info-data' ><strong className='card__info-strong' >capital:</strong> {capital}</p>
            </div>
            </Link>
        </div>

    )
}