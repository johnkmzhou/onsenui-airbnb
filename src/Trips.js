import React from 'react';
import { Page, Icon, Button } from 'react-onsenui';

import "./Trips.css";

export const Trips = () => {
  return (
    <Page>
      <div style={{ margin: 20, textAlign: 'center' }}>
        <h3>What will be your first adventure?</h3>
        <div className="symbol"><Icon className="symbol-icon" size={100} icon="md-airplane"></Icon></div>
        <Button modifier="outline">Start Exploring</Button>
      </div>
    </Page >);
}