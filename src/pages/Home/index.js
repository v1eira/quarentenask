import React from 'react';
import { Link } from 'react-router-dom';

// import LeftBar from '../../components/LeftBar';
// import RightBar from '../../components/RightBar';
import TimeLine from '../../components/TimeLine';

import { Wrapper, Header, Content } from './styles';

// import { Container } from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <Link to="/home">QuarentenAsk</Link>
      </Header>

      <Content>
        <TimeLine />
      </Content>
    </Wrapper>
  );
}
