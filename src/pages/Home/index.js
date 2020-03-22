import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Header, Content, Post } from './styles';

// import { Container } from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <Link to="/home">QuarentenAsk</Link>
      </Header>

      <Content>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Content>
    </Wrapper>
  );
}
