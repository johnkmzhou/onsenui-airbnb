import React from 'react';
import { Page, Toolbar, BottomToolbar, BackButton, Button } from 'react-onsenui';

import './Home.css';

export const Home = () => {
  const renderToolbar = () =>
    <Toolbar>
      <div className="left"><BackButton>Back</BackButton></div>
      <div className="center">Home</div>
    </Toolbar>;

  const renderBottomToolbar = () =>
    <BottomToolbar style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <div className="bottom-text" >
          <span style={{ fontWeight: 'bold' }} >$60</span> per per night<br />200 reviews
        </div>
      </div >
      <div style={{ width: '50%' }}><Button className="bottom-button">Check availability</Button></div>
    </BottomToolbar >;

  return (
    <Page renderToolbar={renderToolbar} renderBottomToolbar={renderBottomToolbar}>
      <img style={{ width: '100%' }} src="https://placeimg.com/720/480/arch?1"></img>
      <section style={{ margin: 20 }}>
        <h2>Light and Spacious Garden Flat</h2>
        <div style={{ float: 'right' }}><img style={{ borderRadius: '50%' }} src="https://placeimg.com/50/50/people?4" alt="profile pic"></img></div>
        <span style={{ fontWeight: 'bold' }}>Private apartment</span>
        <br />
        Hosted by Paige
        <br />
        <a href="#">Message</a>
        <br />
        <hr />
        <p style={{ fontWeight: 'bold' }}>The space</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <hr />
        <p style={{ fontWeight: 'bold' }}>Amenities</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <hr />
        <div style={{ display: 'flex' }}><div style={{ width: '50%' }}>Check-In time</div><div style={{ textAlign: 'right', width: '50%' }}>12PM</div></div>
        <hr />
        <div style={{ display: 'flex' }}><div style={{ width: '50%' }}>Check-Out time</div><div style={{ textAlign: 'right', width: '50%' }}>11AM</div></div>
      </section>
    </Page >
  );
};