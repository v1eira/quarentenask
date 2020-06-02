import React from 'react';

import { Container, Info, Name, User, Follow } from './styles';

function UserCard() {
  return (
    <Container>
      <img
        src="https://api.adorable.io/avatars/285/abott@adorableb.png"
        alt="img"
      />
      <Info>
        <Name>User</Name>
        <User>@user</User>
      </Info>
      <Follow>Seguir</Follow>
    </Container>
  );
}

export default UserCard;
