import React from 'react';

import changeAddressBarColor from '../../components/changeAddressBarColor';

import Header from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import PageBar from '../../components/PageBar';
import QuestionReceived from '../../components/QuestionReceived';

import { Wrapper, Content, QuestionList } from './styles';

export default function Inbox() {
  changeAddressBarColor('#000');

  const lstDemo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Wrapper>
      <Header />
      <Content>
        <PageBar name="Caixa de entrada" />

        <QuestionList>
          {lstDemo.map(() => {
            return <QuestionReceived />;
          })}
        </QuestionList>
      </Content>
      <BottomBar />
    </Wrapper>
  );
}
