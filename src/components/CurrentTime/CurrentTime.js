import React from 'react';
import './CurrentTime.css';
class CurrentTime extends React.Component {
  state = {currTime: new Date().toLocaleString()};
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currTime : new Date().toLocaleString()
      })
    }, 1000);
  }

  render() {
    return (
      <div className="current-time">
      {this.state.currTime} IST
      </div>
    );
  }

}
export default CurrentTime;
