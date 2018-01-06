import React from 'react';
import { Page, Toolbar, BackButton } from 'react-onsenui';

export const Experiences = () => {
  const renderToolbar = () =>
    <Toolbar>
      <div className='left'><BackButton>Back</BackButton></div>
      <div className="center">Experiences</div>
    </Toolbar>;

  const renderExperiences = () => Array(4).fill(
    <div>
      <img src={"https://placeimg.com/720/480/nature?1"} style={{ width: '100%' }} alt="experiences" />
      <span style={{ fontSize: 10 }}>AMSTERDAM</span>
      <br />
      <span style={{ fontWeight: 'bold' }}>Beer Walking Tour</span>
      <br />
      <span>$80 per night</span>
    </div>);

  return (
    <Page renderToolbar={renderToolbar}>
      <div style={{ margin: 20 }}>
        {renderExperiences()}
      </div>
    </Page>
  );
};