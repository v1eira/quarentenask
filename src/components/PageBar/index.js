import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import { Content, GoBackButton, PageName, BarWrapper } from './styles';

function PageBar({ name }) {
  const history = useHistory();

  function handleGoBack() {
    return history.length > 2 ? history.goBack() : history.push('/home');
  }

  return (
    <>
      <Content>
        <GoBackButton onClick={handleGoBack}>
          <FaArrowLeft size={18} color="#fff" opacity={0.8} />
        </GoBackButton>
        <PageName>{name}</PageName>
      </Content>
      <BarWrapper />
    </>
  );
}

PageBar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PageBar;
