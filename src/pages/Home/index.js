import React from 'react';

import Header from '../../components/Header';
import TimeLine from '../../components/TimeLine';

import { Wrapper, Content } from './styles';

// import { Container } from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Header />

      <Content>
        <TimeLine />
      </Content>
    </Wrapper>
  );
}
