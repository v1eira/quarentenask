import React from 'react';

import Header from '../../components/Header';
import TimeLine from '../../components/TimeLine';

import { Wrapper, Content, TopBar, Name, Separator } from './styles';

// import { Container } from './styles';

export default function Home() {
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
    </Wrapper>
  );
}
