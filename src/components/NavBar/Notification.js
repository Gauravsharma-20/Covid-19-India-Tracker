import React, {useState, useRef, useEffect} from 'react';
import { connect } from 'react-redux';

import Loader from '../utils/Loader';
import {fetchNotificationData} from '../actions';

import './NavBar.css';


const NotificationComponent = (props) => {

  const [open, setOpen] = useState(false);
  const notficationRef = useRef();

  //const notiData = JSON.parse(sessionStorage.notificationData);

  //To close on outside the Region of interest clicks
  useEffect(() => {
    const onBodyClick = (event) => {
      if (notficationRef.current && notficationRef.current.contains(event.target)) {
        return;
      }
      
      setOpen(false);
    };
    
    document.body.addEventListener('click', onBodyClick);
    
    //data.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
    //const notiData = JSON.parse(localStorage.notificationData);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  //Fetch Notification Data
  useEffect(() => {
    props.fetchNotificationData();
  }, []);

  const timeAgo = (date) => {
    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };


  const notificationPanel = props.notificationData.slice(0).reverse().map((noti) => {
    //console.log(noti); 
    const currTime = timeAgo(noti.timestamp*1000);
    return (
      <div className="notificationPanel">
        <div className="timestamp">
          {`${currTime} ago`}
        </div>
        <div className="notificationUpdate">
          {noti.update}
        </div>
    </div>
    );
  });

  return (
    <div ref={notficationRef}>
      <i className="far fa-bell" aria-hidden="true" onClick={() => setOpen(!open)} ></i>
      <div className={`notification-panel ${open ?'show':'hide'}`}>
        <div className="notification">
          {notificationPanel}
        </div>
      </div>
    </div>
   );

};

const mapStateToProps = state => {
  return { notificationData: state.notificationData };
};

export default connect(
  mapStateToProps,
  { fetchNotificationData }
)(NotificationComponent);
