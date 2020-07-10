import React from 'react';

import PageBar from '../../components/PageBar';
import Notification from '../../components/Notification';

import { Content, NotificationList } from './styles';

export default function Notifications() {
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
