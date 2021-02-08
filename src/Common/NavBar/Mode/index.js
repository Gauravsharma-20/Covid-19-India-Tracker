import React from 'react';

import '../NavBar.css';

class Mode extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currMode: false,
      modeIcon: 'fas fa-moon',
    };

  }

    handleClick = () => {
    
    if(this.state.currMode) {
      //Dark Mode
      document.body.style.backgroundColor = '#161625';
      document.documentElement.style.setProperty('--data-color', '#25253f');
      document.documentElement.style.setProperty('--header-color', '#41416b');
      document.documentElement.style.setProperty('--search-bar-color', '#e8e8e9');
      document.documentElement.style.setProperty('--table-font-color', '#cececf');
      document.documentElement.style.setProperty('--suggestion-box-color', 'white');

      this.setState({modeIcon: 'fas fa-sun'});
      
    } else {
      //Light Mode
      document.body.style.backgroundColor = 'white';
      document.documentElement.style.setProperty('--data-color', '#f3f4f4');
      document.documentElement.style.setProperty('--header-color', '#dddede');
      document.documentElement.style.setProperty('--search-bar-color', '#fff');
      document.documentElement.style.setProperty('--table-font-color', 'black');
      document.documentElement.style.setProperty('--suggestion-box-color', 'white');

      this.setState({modeIcon: 'fas fa-moon'});
    }

    this.setState({currMode: !this.state.currMode});
  };

  render() {

    return (
      <div className="mode">
        <i className={this.state.modeIcon} onClick={this.handleClick}></i>
      </div>
    );
  };
}

export default Mode;
