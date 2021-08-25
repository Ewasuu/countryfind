import React from 'react'
import { useLocation } from 'wouter'

export function Selector(){
    const [, setPath] = useLocation()
    const handleSelectChange = (e)=>{
        setPath('/')
        setPath(`region/${e.target.value}`)
        if (e.target.value === 'all'){
            setPath('/')
            setPath(`${e.target.value}`)
        }
    }
    return(
                <div className='form__filter' >
                    <select onChange={handleSelectChange} className='form__filter-select' > 
                    <option hidden={true}>Filter by region</option>
                    <option value='africa' >Africa</option>
                    <option value='americas' >Americas</option> 
                    <option value='asia' >Asia</option> 
                    <option value='europe'>Europe</option> 
                    <option value='oceania' >Oceania</option>
                    <option value='all' >No filter</option> 
                    </select>
                </div>
    )
}