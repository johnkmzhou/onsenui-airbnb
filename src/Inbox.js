import React from 'react';
import { Page, Toolbar, BackButton, Button, Icon } from 'react-onsenui';

import './Inbox.css';

export const Inbox = () => {
  const renderToolbar = () =>
    <Toolbar>
      <div className="right"><Icon style={{ marginRight: 10 }} size={30} icon="md-inbox"></Icon></div>
    </Toolbar>;
  ;

  return (
    <Page renderToolbar={renderToolbar}>
      <div className="inbox-bg">
        <span className="inbox-title">Messages</span>
        <div className="inbox-box">
          <p style={{ fontWeight: 'bold', fontSize: 18 }}>No messages yet</p>
          <p>When you find a place you love, connect with the host. Tell a them a bit about yourself and the purpose of your trip.</p>
          <Button>Start Exploring</Button>
        </div>
      </div>
    </Page>
  );
};