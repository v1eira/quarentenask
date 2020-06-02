import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  border-bottom: 1px solid #333;
  padding: 10px 20px;

  transition: 0.2s background-color;

  &:hover {
    background-color: ${lighten(0.05, '#000')};
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
