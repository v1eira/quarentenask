/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

import {
  Container,
  Item,
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
      <Item>
        <LeftSide>
          <FaHeart />
        </LeftSide>
        <Content>
          <User>
            <Link onClick={(e) => handleClick(e, '/home')}>
              <img
                src="https://pbs.twimg.com/profile_images/1579423064244330496/bvbCtf-K_400x400.jpg"
                alt="img"
              />
            </Link>
            <UserTag onClick={(e) => handleClick(e, '/home')}>
              @janainassevero
            </UserTag>
          </User>
          <Message>
            <Name>Jana</Name> curtiu sua resposta
          </Message>
        </Content>
      </Item>
    </Container>
  );
}
