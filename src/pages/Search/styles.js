import styled from 'styled-components';
import { lighten } from 'polished';

export const Content = styled.div`
  width: 680px;
  min-height: calc(100vh - 83px);
  margin: 68px auto 0;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;

  border-right: 1px solid #333;
  border-left: 1px solid #333;

  a {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    border: none;
    width: 100%;
    margin: 68px 0 0;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContent = styled.div`
  align-self: center;
  background: #16161c;
  padding: 12px 0;
  width: 95%;
  height: 20px;
  margin: 15px 0;
  border-radius: 20px;

  display: flex;
  align-items: center;

  &:focus {
    background: ${lighten(0.02, '#16161c')};
  }

  @media (max-width: 450px) {
    width: 85%;
  }

  input {
    background: transparent;
    padding: 10px 15px;
    border-radius: 50%;
    border: none;
    outline: none;
    color: #fff;
    width: 100%;

    @media (max-width: 500px) {
      width: 85%;
    }
  }

  .reset-button {
    border: none;
    outline: none;
    background: transparent;
    border-radius: 12px;
    margin-left: auto;
    margin-right: 5px;

    color: #999;

    transition: 0.2s color;

    svg {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: #fff;
    }
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
