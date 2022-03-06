import React from 'react'
import { useLocation } from 'wouter'


export function CountryDetail({countries}){
    const [, setPath] = useLocation()
    const handleClickBack = ()=>{
        setPath('/')
    }
    const handleClickForward = (e)=>{
        setPath('/')
        setPath(`name/${e.target.value}`)
    }
    return(
        <>  
        <button onClick={handleClickBack} className='back__btn' >Back</button>
            {countries.map( data => { return(
            <div className='card2__container' key={data.name} >
                <div className='card2' >
                <div className='card__image' >
                    <img className='card__image-image' alt={data.name} src={data.flag} />
                </div>
                <div className='card__info2'>
                    <h3 className='card__info-title' >{data.name}</h3>
                    <div className="card__info-container">
                        <p className='card__info-data' ><strong className='card__info-strong' >Native Name:</strong> {data.nativeName}</p>
                        <p className='card__info-data' ><strong className='card__info-strong' >Population:</strong> {data.population}</p>
                        <p className='card__info-data' ><strong className='card__info-strong' >Region:</strong> {data.region}</p>
                        <p className='card__info-data' ><strong className='card__info-strong' >Sub Region:</strong> {data.subregion}</p>
                        <p className='card__info-data' ><strong className='card__info-strong' >Capital:</strong> {data.capital}</p>
                    </div>
                    <div className="card__info-container2">
                        <p className='card__info-data' ><strong className='card__info-strong' >Top Level Domain:</strong> {data.topLevelDomain}</p>
                        <p className='card__info-data' ><strong className='card__info-strong' >Currencies:</strong> {data.code.map(res => res.code)}</p>
                        <p className='card__info-data' ><strong className='card__info-strong' >Languages:</strong> {data.language}</p>
                    </div>
                </div>
                </div>
            </div>
            )})}
            <div className='btn__container-section' >
                <p className='btn__title' >Border Countries:</p>
                <div className='btn__container' >
                    {countries.map( data => data.borders.map(res => <button onClick={handleClickForward} value={res} key={res}> {res} </button>))}
                </div>
            </div>
        </>


    )
}