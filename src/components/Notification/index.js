/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

import {
  Container,
  LeftSide,
  Content,
  User,
  UserTag,
  Message,
  Name,
} from './styles';

export default function Notification() {
  const history = useHistory();

  function handleClick(e, path) {
    e.preventDefault();
    history.push(path);
    e.stopPropagation();
  }

  return (
    <Container onClick={(e) => handleClick(e, '/question')}>
      <LeftSide>
        <FaHeart />
      </LeftSide>
      <Content>
        <User>
          <Link onClick={(e) => handleClick(e, '/home')}>
            <img
              src="https://api.adorable.io/avatars/285/abott@adorablb.png"
              alt="img"
            />
          </Link>
          <UserTag onClick={(e) => handleClick(e, '/home')}>@anab_leao</UserTag>
        </User>
        <Message>
          <Name>Bellatrix</Name> curtiu sua resposta
        </Message>
      </Content>
    </Container>
  );
}
