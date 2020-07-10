import React from 'react';

import PageBar from '../../components/PageBar';
import QuestionReceived from '../../components/QuestionReceived';

import { Content, QuestionList } from './styles';

export default function Inbox() {
  const lstDemo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Content>
      <PageBar name="Caixa de entrada" />

      <QuestionList>
        {lstDemo.map(() => {
          return <QuestionReceived />;
        })}
      </QuestionList>
    </Content>
  );
}
