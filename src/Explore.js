import React from 'react';
import { Page, SearchInput, Button, Card } from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './Explore.css';

export const Explore = () => {
  const renderExperiences = () => Array(4).fill(
    <div className="item">
      <img src={"https://placeimg.com/720/480/nature?9"} style={{ width: '100%' }} alt="experiences" />
      <span style={{ fontSize: 10 }}>AMSTERDAM</span>
      <br />
      <span style={{ fontWeight: 'bold' }}>Beer Walking Tour</span>
      <br />
      <span>$80 per night</span>
    </div>
  );

  const renderHomes = () => Array(4).fill(
    <div className="item">
      <img src={"https://placeimg.com/720/480/arch?1"} style={{ width: '100%' }} alt="experiences" />
      <span style={{ fontSize: 10 }}>ENTIRE APARTMENT • 2 BEDS</span>
      <br />
      <span style={{ fontWeight: 'bold' }}>Light and Spacious Garden Flat</span>
      <br />
      <span>$80 per night</span>
    </div>);

  return (
    <Page>
      <div style={{ margin: 20 }}>
        <p style={{ textAlign: 'center' }}>
          <SearchInput style={{ width: '100%' }} placeholder='Try "Las Vegas"' />
        </p>
        <p>
          <Button className="top-button" modifier="outline">All Dates</Button>
          <Button className="top-button" modifier="outline">Guests</Button>
        </p>
      </div>
      <div style={{ margin: 20 }}>
        <section>
          <h2 style={{ fontWeight: 'bold' }}>Explore Airbnb</h2>
          <div style={{ display: 'flex' }}>
            <Card style={{ marginLeft: 0, width: '45%' }}>
              <img src={"https://placeimg.com/720/480/arch?4"} style={{ width: '100%' }} alt="homes" />
              <div className="title">
                Homes
          </div>
            </Card>
            <Card style={{ width: '45%' }}>
              <img src={"https://placeimg.com/720/480/nature?1"} style={{ width: '100%' }} alt="experiences" />
              <div className="title">
                Experiences
          </div>
            </Card>
          </div>
        </section>
        <section>
          <h2 style={{ fontWeight: 'bold' }}>Experiences</h2>
          <div className="items">
            {renderExperiences()}
          </div>
          <Button modifier="outline large">Show all (2000+)</Button>
        </section>
        <section>
          <h2 style={{ fontWeight: 'bold' }}>Homes</h2>
          <div className="items">
            {renderHomes()}
          </div>
          <Button modifier="outline large">Show all (2000+)</Button>
        </section>
      </div>
    </Page>
  );
};
