import React from 'react';

import TimeLine from '../../components/TimeLine';

import { Content, TopBar, Name, Separator } from './styles';

export default function Home() {
  return (
    <Content>
      <TopBar>
        <Name>Página inicial</Name>
      </TopBar>

      <Separator />

      <TimeLine />
    </Content>
  );
}
