import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  z-index: 1;
  background: #000;

  @media (max-width: 450px) {
    height: calc(100vh - 53px);
  }
`;

export const Content = styled.div`
  width: 680px;
  min-height: calc(100vh - 83px);
  margin: 68px auto 0;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;

  border-right: 1px solid #333;
  border-left: 1px solid #333;

  @media (max-width: 700px) {
    border: none;
    width: 100%;
    margin: 68px 0 0;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

export const FilterSelector = styled.div`
  display: flex;
  justify-content: space-around;
  background: #000;
  margin-bottom: 15px;

  a {
    width: 100%;
    padding: 15px 0;
    text-align: center;

    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: #999;
    border-bottom: 1px solid #555;

    &:focus {
      color: #fff;
      border-color: #fff;
    }

    &:hover {
      color: #fff;
      background: ${lighten(0.05, '#000')};
    }
  }

  .focused {
    color: #fff;
    border-color: #fff;
  }
`;
