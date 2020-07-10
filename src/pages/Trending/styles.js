import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Content = styled.div`
  width: 680px;
  min-height: calc(100vh - 83px);
  margin: 68px auto 0;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;

  border-right: 1px solid ${(props) => props.theme.colors.border};
  border-left: 1px solid ${(props) => props.theme.colors.border};

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

export const FilterSelector = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${(props) => props.theme.colors.background};
  margin-bottom: 15px;

  a {
    width: 100%;
    padding: 15px 0;
    text-align: center;

    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.noFocus};
    border-bottom: 1px solid ${(props) => props.theme.colors.border};

    &:focus {
      color: ${(props) => props.theme.colors.primary};
      border-color: ${(props) => props.theme.colors.primary};
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};
      background: ${(props) =>
        props.theme.title === 'dark'
          ? lighten(0.05, props.theme.colors.background)
          : darken(0.05, props.theme.colors.background)};
    }
  }

  .focused {
    color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
