import React from 'react';

import changeAddressBarColor from '../../components/changeAddressBarColor';

import TimeLine from '../../components/TimeLine';

import { Content, TopBar, Name, Separator } from './styles';

export default function Home() {
  changeAddressBarColor('#000');
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
