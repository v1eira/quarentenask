import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import BottomBar from '../../../components/BottomBar';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <BottomBar />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
