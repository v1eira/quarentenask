/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

import changeAddressBarColor from '../../components/changeAddressBarColor';

import Header from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import PageBar from '../../components/PageBar';
import Timeline from '../../components/TimeLine';

import { Wrapper, Content, FilterSelector } from './styles';

export default function Trending() {
  changeAddressBarColor('#000');

  const [focused, setFocused] = useState('todos');
  const [newFocus, setNewFocus] = useState('todos');

  useEffect(() => {
    document.getElementById(focused).classList.remove('focused');
    document.getElementById(newFocus).classList.add('focused');
    setFocused(newFocus);
  }, [focused, newFocus]);

  return (
    <Wrapper>
      <Header />
      <Content>
        <PageBar name="Mais curtidas" />

        <FilterSelector>
          <a
            className="focused"
            onClick={() => setNewFocus('todos')}
            id="todos"
          >
            <span>Todos</span>
          </a>
          <a onClick={() => setNewFocus('seguindo')} id="seguindo">
            <span>Seguindo</span>
          </a>
        </FilterSelector>

        <Timeline />
      </Content>
      <BottomBar />
    </Wrapper>
  );
}
