import React from 'react';

import Question from '../Question';

import { Container, QuestionList } from './styles';

export default function TimeLine() {
  return (
    <Container>
      <QuestionList>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </QuestionList>
    </Container>
  );
}
