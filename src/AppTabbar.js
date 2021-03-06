import React from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import { Explore } from './Explore';
import { Saved } from './Saved';
import { Trips } from './Trips';
import { Inbox } from './Inbox';
import { Profile } from './Profile';

export const AppTabbar = props => {
  const renderTabs = navigator => [
    {
      content: <Explore key="explore" navigator={props.navigator} />,
      tab: <Tab key="explore" label="Explore" icon="md-search" />
    },
    {
      content: <Saved key="saved" navigator={props.navigator} />,
      tab: <Tab key="saved" label="Saved" icon="md-favorite-outline" />
    },
    {
      content: <Trips key="trips" navigator={props.navigator} />,
      tab: <Tab key="trips" label="Trips" icon="md-airplane" />
    },
    {
      content: <Inbox key="inbox" navigator={props.navigator} />,
      tab: <Tab key="inbox" label="Inbox" icon="md-comment-outline" />
    },
    {
      content: <Profile key="profile" navigator={props.navigator} />,
      tab: <Tab key="profile" label="Profile" icon="md-account-o" />
    }
  ];

  return (
    <Page>
      <Tabbar position='bottom' index={0} renderTabs={renderTabs} />
    </Page>
  );
};
