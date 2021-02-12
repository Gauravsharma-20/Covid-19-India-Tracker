import React, {useState, useRef, useEffect} from 'react';
import { connect } from 'react-redux';

import {fetchNotificationData} from '../../../storage/actions';

import timeAgo from '../../../utils/Helper/timeAgo';

import './Notification.css';


const bellIconInactive = 'far fa-bell';
const bellIconActive = 'fa fa-bell';


const NotificationComponent = (props) => {

  const [open, setOpen] = useState(false);
  const [bellIcon, setBellIcon] = useState(bellIconInactive)
  const notficationRef = useRef();
  

  //To close on outside the Region of interest clicks
  useEffect(() => {

    const onBodyClick = (event) => {
      if (notficationRef.current && notficationRef.current.contains(event.target)) {
        return;
      }
      
      setOpen(false);
    };
    
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);


  //Fetch Notification Data
  useEffect(() => {
    props.fetchNotificationData();
  }, []);

  useEffect(()=>setBellIcon(open?bellIconActive:bellIconInactive), [open]);


  const notificationPanel = props.notificationData.slice(0).reverse().map((noti) => {
    console.log(noti.timestamp);
    const notificationTimestamp = timeAgo(noti.timestamp*1000);
    const notificationUpdate = noti.update;
    
    return (
      <div className="notificationPanel" key={notificationUpdate}>
        <div className="timestamp">
          {`${notificationTimestamp} ago`}
        </div>
        <div className="notificationUpdate">
          {notificationUpdate}
        </div>
    </div>
    );
  });


  return (
    <div ref={notficationRef}>
      <i className={bellIcon} aria-hidden="true" onClick={() => setOpen(!open)} ></i>
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
