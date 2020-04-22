import React from 'react';

import SinglePost from '../SinglePost';

import { Container, PostList } from './styles';

export default function TimeLine() {
  return (
    <Container>
      <PostList>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </PostList>
    </Container>
  );
}
