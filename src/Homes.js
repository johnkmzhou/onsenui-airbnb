import React from 'react';
import { Page, Toolbar, BackButton } from 'react-onsenui';

export const Homes = () => {
  const renderToolbar = () =>
    <Toolbar>
      <div className='left'><BackButton>Back</BackButton></div>
      <div className="center">Homes</div>
    </Toolbar>;

  const renderHomes = () => Array(4).fill(
    <div>
      <img src={"https://placeimg.com/720/480/arch?4"} style={{ width: '100%' }} alt="experiences" />
      <span style={{ fontSize: 10 }}>ENTIRE APARTMENT • 2 BEDS</span>
      <br />
      <span style={{ fontWeight: 'bold' }}>Light and Spacious Garden Flat</span>
      <br />
      <span>$80 per night</span>
    </div>);

  return (
    <Page renderToolbar={renderToolbar}>
      <div style={{ margin: 20 }}>
        {renderHomes()}
      </div>
    </Page>
  );
};