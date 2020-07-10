/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

import { FaTimesCircle } from 'react-icons/fa';

import changeAddressBarColor from '../../components/changeAddressBarColor';

import PageBar from '../../components/PageBar';
import Timeline from '../../components/TimeLine';

import { Content, SearchBar, SearchContent, FilterSelector } from './styles';

export default function Search() {
  changeAddressBarColor('#000');

  const [search, setSearch] = useState('');
  const [showBtn, setshowBtn] = useState(false);

  const [itemType, setItemType] = useState('user');
  const [focused, setFocused] = useState('user');
  const [newFocus, setNewFocus] = useState('user');

  useEffect(() => {
    if (focused !== newFocus) {
      document.getElementById(focused).classList.remove('focused');
      document.getElementById(newFocus).classList.add('focused');
      setFocused(newFocus);
      setItemType(newFocus);
    }
  }, [focused, newFocus]);

  useEffect(() => {
    const s = document.getElementById('search-input');
    if (s && s.value !== '') {
      setshowBtn(true);
    } else {
      setshowBtn(false);
    }
  }, [search]);

  function eraseSearch() {
    document.getElementById('search-input').value = '';
    setSearch('');
  }

  return (
    <Content>
      <PageBar name="Pesquisar" />

      <SearchBar>
        <SearchContent>
          <input
            type="text"
            placeholder="Buscar no QuarentenAsk"
            autoCapitalize="off"
            id="search-input"
            onKeyUp={() =>
              setSearch(document.getElementById('search-input').value)
            }
          />
          {showBtn && (
            <button type="button" className="reset-button">
              <FaTimesCircle onClick={eraseSearch} />
            </button>
          )}
        </SearchContent>
      </SearchBar>

      <FilterSelector>
        <a className="focused" onClick={() => setNewFocus('user')} id="user">
          <span>Usuários</span>
        </a>
        <a onClick={() => setNewFocus('question')} id="question">
          <span>Perguntas</span>
        </a>
      </FilterSelector>

      <Timeline type={itemType} />
    </Content>
  );
}
