import React from 'react';
import PropTypes from 'prop-types';

import changeAddressBarColor from '../../../utils/changeAddressBarColor';

import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  changeAddressBarColor('#16161c');

  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
