import React from 'react';
import { Page, Toolbar, BottomToolbar, BackButton, Button } from 'react-onsenui';

import './Experience.css';

export const Experience = () => {
  const renderToolbar = () =>
    <Toolbar>
      <div className="left"><BackButton>Back</BackButton></div>
      <div className="center">Experience</div>
    </Toolbar>;

  const renderBottomToolbar = () =>
    <BottomToolbar style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <div className="bottom-text" >
          <span style={{ fontWeight: 'bold' }} >$80</span> per person<br />200 reviews
        </div>
      </div >
      <div style={{ width: '50%' }}><Button className="bottom-button">See dates</Button></div>
    </BottomToolbar >;

  return (
    <Page renderToolbar={renderToolbar} renderBottomToolbar={renderBottomToolbar}>
      <section className="experience-bg">
        <div className="experience-bg-text">
          <span style={{ fontSize: 10 }}>FOOD AND DRINKS</span>
          <br />
          <span style={{ fontSize: 24, fontWeight: 'bold' }}>Beer Walking Tour</span>
          <p><ons-icon icon="md-pin"></ons-icon> AMSTERDAM</p>
          <p><ons-icon icon="md-time"></ons-icon> 4 hours total</p>
          <p><ons-icon icon="md-calendar-note"></ons-icon> Cost of food and beer included</p>
          <p><ons-icon icon="md-comments"></ons-icon> Offered in English</p>
        </div>
      </section>
      <section style={{ margin: 20 }}>
        <div style={{ float: 'right' }}><img style={{ borderRadius: '50%' }} src="https://placeimg.com/50/50/people?4" alt="profile pic"></img></div>
        <span style={{ fontWeight: 'bold' }}>Meet your host, Paige</span>
        <br />
        <a href="#">Message</a>
        <br />
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <hr />
        <p style={{ fontWeight: 'bold' }}>What we'll do</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p style={{ fontWeight: 'bold' }}>What I'll provide</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <hr />
        <p style={{ fontWeight: 'bold' }}>Notes</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p style={{ fontWeight: 'bold' }}>Where we'll be</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      </section>
    </Page >
  );
};