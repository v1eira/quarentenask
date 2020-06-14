import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.li`
  width: 630px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #16161c;
  padding: 10px 25px;

  border-bottom: 1px solid #333;

  &:hover {
    background: ${lighten(0.02, '#16161c')};
  }

  @media (max-width: 700px) {
    width: calc(100% - 50px);
  }
`;

export const LeftSide = styled.div`
  svg {
    font-size: 20px;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 25px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const UserTag = styled.a`
  margin-left: 12px;

  cursor: pointer;
  outline: none;
  text-decoration: none;
  color: #999;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;
export const Message = styled.span`
  margin-top: 8px;
  font-size: 16px;
  color: #999;
`;

export const Name = styled.span`
  font-weight: bold;
  color: #fff;
`;
