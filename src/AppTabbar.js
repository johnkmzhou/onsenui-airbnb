import React, { Component } from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export class AppTabbar extends Component {
  renderTabs = navigator => [
    {
      content: <Page key="explore" navigator={this.props.navigator} />,
      tab: <Tab key="explore" label="Explore" icon="md-search" />
    },
    {
      content: <Page key="saved" navigator={this.props.navigator} />,
      tab: <Tab key="saved" label="Saved" icon="md-favorite-outline" />
    },
    {
      content: <Page key="trips" navigator={this.props.navigator} />,
      tab: <Tab key="trips" label="Trips" icon="md-airplane" />
    },
    {
      content: <Page key="inbox" navigator={this.props.navigator} />,
      tab: <Tab key="inbox" label="Inbox" icon="md-comment-outline" />
    },
    {
      content: <Page key="profile" navigator={this.props.navigator} />,
      tab: <Tab key="profile" label="Profile" icon="md-account-o" />
    }
  ];

  render() {
    return (
      <Page>
        <Tabbar position='bottom' index={0} renderTabs={this.renderTabs} />
      </Page>
    );
  }
}