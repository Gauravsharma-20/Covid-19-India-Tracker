import React, { useState } from 'react';

import '../NavBar.css';


const darkModeIcon = 'fas fa-moon';
const lightModeIcon = 'fas fa-sun';


const Mode = () =>{

  const [darkMode, setDarkMode] = useState(false);
  const [modeIcon, setModeIcon] = useState(darkModeIcon);

  
  const theme = {
    dark: {
      bodyColor: '#161625',
      dataColor: '#25253f',
      headerColor: '#41416b',
      searchBarColor: '#e8e8e9',
      tableFontColor: '#cececf',
      suggestionBoxColor: 'white',
      modeIcon: lightModeIcon,
    }, 
    light: {
      bodyColor: 'white',
      dataColor: '#f3f4f4',
      headerColor: '#dddede',
      searchBarColor: '#fff',
      tableFontColor: 'black',
      suggestionBoxColor: 'white',
      modeIcon: darkModeIcon,
    }
  };


  const handleClick = () => {
  
    if(darkMode) {
      document.body.style.backgroundColor = theme.dark.bodyColor;
      document.documentElement.style.setProperty('--data-color', theme.dark.dataColor);
      document.documentElement.style.setProperty('--header-color', theme.dark.headerColor);
      document.documentElement.style.setProperty('--search-bar-color', theme.dark.searchBarColor);
      document.documentElement.style.setProperty('--table-font-color', theme.dark.tableFontColor);
      document.documentElement.style.setProperty('--suggestion-box-color', theme.dark.suggestionBoxColor);

      setModeIcon(theme.dark.modeIcon);
      
    } else {
      document.body.style.backgroundColor = theme.light.bodyColor;
      document.documentElement.style.setProperty('--data-color', theme.light.dataColor);
      document.documentElement.style.setProperty('--header-color', theme.light.headerColor);
      document.documentElement.style.setProperty('--search-bar-color', theme.light.searchBarColor);
      document.documentElement.style.setProperty('--table-font-color', theme.light.tableFontColor);
      document.documentElement.style.setProperty('--suggestion-box-color', theme.light.suggestionBoxColor);

      setModeIcon(theme.light.modeIcon);
    }

    setDarkMode(!darkMode);
  };


  return (
    <div className="mode">
      <i className={modeIcon} onClick={handleClick}></i>
    </div>
  );
};

export default Mode;
