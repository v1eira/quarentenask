import React from 'react';

import changeAddressBarColor from '../../components/changeAddressBarColor';

import Header from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import TimeLine from '../../components/TimeLine';

import { Wrapper, Content, TopBar, Name, Separator } from './styles';

// import { Container } from './styles';

export default function Home() {
  changeAddressBarColor('#000');
  return (
    <Wrapper>
      <Header />

      <Content>
        <TopBar>
          <Name>Página inicial</Name>
        </TopBar>

        <Separator />

        <TimeLine />
      </Content>

      <BottomBar />
    </Wrapper>
  );
}
