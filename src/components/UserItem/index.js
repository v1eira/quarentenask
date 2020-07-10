import React from 'react';

import { Container, Info, Name, User, Follow } from './styles';

function UserItem() {
  const src = `https://api.adorable.io/avatars/285/abott${Math.floor(
    Math.random() * 1000
  )}@adorableb.png`;
  return (
    <Container>
      <img src={src} alt="img" />
      <Info>
        <Name>User</Name>
        <User>@user</User>
      </Info>
      <Follow>Seguir</Follow>
    </Container>
  );
}

export default UserItem;
