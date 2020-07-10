import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from 'styled-components';
import Header from '../../../components/Header';
import BottomBar from '../../../components/BottomBar';

import changeAddressBarColor from '../../../utils/changeAddressBarColor';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  const { colors } = useContext(ThemeContext);
  changeAddressBarColor(colors.background);
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
