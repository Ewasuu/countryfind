import React, { useRef } from 'react';
import { Home } from './components/home';
import { Route } from 'wouter'
import { SearcherforName } from './components/searcherForName';
import { SearcherforRegion } from './components/searcherForRegion';

function App() {
  const text = useRef()
  const color = localStorage.getItem('color mode') !== null? localStorage.getItem('color mode') : 'light'
  
  document.body.setAttribute('theme', color)
  const themeSwitch = ()=>{
    if(text.current.textContent === ' Dark mode'){
      text.current.innerHTML= '<i class="fa fa-sun-o"></i> Light mode'
      document.body.setAttribute('theme', 'dark')
      localStorage.setItem('color mode', 'dark')
    }
    else{
      text.current.innerHTML= '<i class="fa fa-moon-o"></i> Dark mode'
      document.body.setAttribute('theme', 'light')
      localStorage.setItem('color mode', 'light')
    }
  }
  
  return (
    <>
      <header className="header">
        <h2>Where in the world?</h2>
        {document.body.getAttribute('theme') === 'light'? <h2 className='toggle' ref={text} onClick={themeSwitch} ><i className="fa fa-moon-o"></i> Dark mode</h2> : <h2 className='toggle' ref={text} onClick={themeSwitch} ><i className="fa fa-sun-o"></i> Light mode</h2>  }
      </header>
      <Route path='/' component={Home} />
      <Route path='/all' component={Home} />
      <Route path='/name/:country' component={SearcherforName} />
      <Route path='/region/:region' component={SearcherforRegion} />

    </>
  );
}

export default App;
