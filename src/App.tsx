import React,{useState} from 'react';
import './App.scss';
import Header from './Components/Header/index';

function App(){
  const [theme, setTheme] = useState(false)

  const toggleMode = () => {
    setTheme(prevTheme => !prevTheme)
  }
  
  return(
    <div className='app' data-toggle={theme}>
      <div className='app__header-wrapper'>
        <Header 
          name='RoyalManuel'
          toggle={theme}
          onclick={toggleMode}
          theme={theme}
        />
      </div>
      <div className='app__home'>
        {/* <Home /> */}
      </div>
    </div>
  )
}

export default App