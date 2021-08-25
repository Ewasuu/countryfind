import React, { useState } from 'react'
import { useLocation } from 'wouter'
import { Selector } from './selector'

function Form(){
    const [word, setWord] = useState('')
    const [, setPath] = useLocation()
    const handleSubmit = (e)=>{
        e.preventDefault()
        setPath('/')
        setPath(`name/${word}`)
    }
    const handleinputChange = (e)=>{
        setWord(e.target.value)
    }
    return(
        <>
            <form className='form' onSubmit={handleSubmit} >
                <div className='form__search' >
                    <label className='form__search-icon' htmlFor='search' > <i className="fa fa-search" aria-hidden="true"></i> </label>
                    <input onChange={handleinputChange} className='form__search-input' value={word} id='search' placeholder='Search for a country' type='search' />
                </div>
                <Selector/>
            </form>
        </>

    )
}
export default React.memo(Form)