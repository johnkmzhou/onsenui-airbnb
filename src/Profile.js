import React from 'react';
import { Page, Icon } from 'react-onsenui';

import './Profile.css';

export const Profile = () => {

  return (
    <Page>
      <div style={{ margin: 20 }}>
        <div style={{ float: 'right' }}><img style={{ borderRadius: '50%' }} src="https://placeimg.com/50/50/people?7" alt="profile pic"></img></div>
        <p>
          <span style={{ fontWeight: 'bold', fontSize: 26 }}>John</span>
          <br />
          <span>View and edit profile</span>
        </p>
        <hr />
        <div style={{ fontSize: 18 }}>
          <div style={{ display: 'flex' }}><div style={{ width: '50%' }}>Notifications</div><Icon className="profile-icon" size={22} icon="md-notifications-none" /></div>
          <hr />
          <div style={{ display: 'flex' }}><div style={{ width: '50%' }}>Credits and Coupons</div><Icon className="profile-icon" size={22} icon="md-money-box" /></div>
          <hr />
          <div style={{ display: 'flex' }}><div style={{ width: '50%' }}>Invite friends</div><Icon className="profile-icon" size={22} icon="md-card-giftcard" /></div>
          <hr />
          <div style={{ display: 'flex' }}><div style={{ width: '50%' }}>Payments</div><Icon className="profile-icon" size={22} icon="md-money" /></div>
          <hr />
          <div style={{ display: 'flex' }}><div style={{ width: '50%' }}>Become a host</div><Icon className="profile-icon" size={22} icon="md-home" /></div>
          <hr />
          <div style={{ display: 'flex' }}><div style={{ width: '50%' }}>Settings</div><Icon className="profile-icon" size={22} icon="md-settings" /></div>
          <hr />
          <div style={{ display: 'flex' }}><div style={{ width: '50%' }}>Get help</div><Icon className="profile-icon" size={22} icon="md-help" /></div>
          <hr />
          <div style={{ display: 'flex' }}><div style={{ width: '50%' }}>Give us feedback</div><Icon className="profile-icon" size={22} icon="md-mail-send" /></div>
        </div>
      </div>
    </Page >
  );
};