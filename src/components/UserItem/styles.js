import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  width: 620px;

  background-color: #16161c;
  border: none;
  border-radius: 12px;
  padding: 20px;

  transition: 0.2s background-color;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &:hover {
    background: ${lighten(0.02, '#16161c')};
  }

  @media (max-width: 700px) {
    width: calc(80vw - 20px);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Name = styled.span`
  color: #fff;
`;

export const User = styled.span`
  color: #999;
`;

export const Follow = styled.button`
  cursor: pointer;
  margin-left: auto;
  border: none;
  background: transparent;
  text-align: center;
  padding-bottom: 2px;

  color: #999;
  font-size: 15px;
  font-weight: bold;
  outline: none;

  width: 80px;
  height: 30px;
  border-radius: 40px;
  border: 1px solid #999;

  transition: 0.2s;

  &:hover {
    border-color: #fff;
    color: #fff;
  }
`;
