import React from 'react';

import { Link } from 'react-router-dom';

import changeAddressBarColor from '../../components/changeAddressBarColor';

import Header from '../../components/Header';
import PageBar from '../../components/PageBar';
import Timeline from '../../components/TimeLine';

import { Wrapper, Content, FilterSelector } from './styles';

export default function Trending() {
  changeAddressBarColor('#000');

  function pushFocusedClass(id) {
    const ids = ['todos', 'seguindo'];

    const e = document.getElementById(id);
    e.classList.add('focused');

    for (let i = 0; i < ids.length; i += 1) {
      if (ids[i] !== id) {
        const el = document.getElementById(ids[i]);
        if (el.classList.length > 0) el.classList.remove('focused');
      }
    }
  }

  return (
    <Wrapper>
      <Header />
      <Content>
        <PageBar name="Mais curtidas" />

        <FilterSelector>
          <Link
            to="/trending"
            className="focused"
            onClick={() => pushFocusedClass('todos')}
            id="todos"
          >
            <span>Todos</span>
          </Link>
          <Link
            to="/trending"
            onClick={() => pushFocusedClass('seguindo')}
            id="seguindo"
          >
            <span>Seguindo</span>
          </Link>
        </FilterSelector>

        <Timeline />
      </Content>
    </Wrapper>
  );
}
