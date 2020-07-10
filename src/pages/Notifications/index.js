import React from 'react';

import changeAddressBarColor from '../../components/changeAddressBarColor';

import PageBar from '../../components/PageBar';
import Notification from '../../components/Notification';

import { Content, NotificationList } from './styles';

export default function Notifications() {
  changeAddressBarColor('#000');

  const lstDemo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Content>
      <PageBar name="Notificações" />

      <NotificationList>
        {lstDemo.map(() => {
          return <Notification />;
        })}
      </NotificationList>
    </Content>
  );
}
