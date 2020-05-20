import styled from 'styled-components';

export const Content = styled.div`
  width: 679px;
  padding: 5px 0;
  position: fixed;
  z-index: 1;

  display: flex;
  align-items: center;

  border: 1px solid #333;
  background: #000;

  button {
    margin: 0 20px;
  }

  @media (max-width: 700px) {
    border: none;
    border-bottom: 1px solid #333;
  }
`;

export const GoBackButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  width: 40px;
  height: 40px;
  border-radius: 20px;

  transition: 0.2s background;

  &:hover {
    background: #141419;
  }
`;

export const PageName = styled.span`
  color: white;
  font-size: 22px;
  font-weight: bold;
`;

export const BarWrapper = styled.div`
  height: 52px;
`;
