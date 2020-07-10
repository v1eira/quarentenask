import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const UserProfile = styled.div`
  width: 680px;
  margin: 68px auto 0;
  background: transparent;

  border-right: 1px solid ${(props) => props.theme.colors.border};
  border-left: 1px solid ${(props) => props.theme.colors.border};

  button {
    outline: none;
  }

  textarea {
    outline: none;
  }

  @media (max-width: 700px) {
    border: none;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

export const Images = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  img + img {
    width: 150px;
    border-radius: 50%;
    border: 1px solid black;
    position: absolute;
    top: 65%;
    left: 2%;
  }

  margin-bottom: 80px;

  @media (max-width: 700px) {
    img {
      width: 100vw;
      height: 32vw;
    }

    img + img {
      width: 21vw;
      height: 21vw;
    }

    margin-bottom: 11vw;
  }
`;

export const Content = styled.div`
  padding: 0 15px 15px;

  svg {
    color: ${(props) => props.theme.colors.icon};
  }

  @media (max-width: 700px) {
    width: calc(100vw - 30px);
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const NameAndUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  span {
    font-size: 20px;
    font-weight: bold;
  }

  span + span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.quaternary};
    margin-left: 10px;
  }
`;

export const EditButton = styled.button`
  margin-left: auto;
  cursor: pointer;

  border: 1px solid ${(props) => props.theme.colors.quaternary};
  border-radius: 20px;
  background: inherit;
  padding: 10px 15px;

  transition: 0.2s;

  span {
    font-size: 15px;
    color: ${(props) => props.theme.colors.quaternary};
    transition: 0.2s;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    background: ${(props) =>
      props.theme.title === 'dark'
        ? lighten(0.05, props.theme.colors.background)
        : darken(0.05, props.theme.colors.background)};
    span {
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  a {
    color: ${(props) => props.theme.colors.quaternary};
    text-decoration: underline;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  svg + a {
    margin-left: 10px;
  }
`;

export const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;

  img {
    width: 100%;
  }

  svg + span {
    margin-left: 10px;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  margin-top: 15px;

  .stats-spaced {
    margin-left: 15px;
  }
`;

export const Following = styled.div`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${(props) => props.theme.colors.text};
    }
  }

  span {
    color: ${(props) => props.theme.colors.quaternary};
  }

  .following-spaced {
    margin-left: 5px;
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
  }
`;

export const Followers = styled.div`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${(props) => props.theme.colors.text};
    }
  }

  span {
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
  }

  .followers-spaced {
    margin-left: 5px;
    color: ${(props) => props.theme.colors.quaternary};
    font-weight: normal;
  }
`;

export const FollowButton = styled.button`
  margin-left: auto;
  cursor: pointer;

  display: flex;
  align-items: center;

  border: 1px solid transparent;
  border-radius: 20px;
  background: inherit;
  padding: 10px 15px;

  span {
    margin-left: 5px;
    font-size: 15px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.quaternary};
    display: none;
  }

  transition: 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    background: ${(props) =>
      props.theme.title === 'dark'
        ? lighten(0.05, props.theme.colors.background)
        : darken(0.05, props.theme.colors.background)};

    span {
      display: block;
    }

    svg {
      width: 15px !important;
    }

    span,
    svg {
      color: ${(props) => props.theme.colors.icon} !important;
    }
  }
`;

export const Question = styled.div`
  width: 100%;
  margin: 30px 0 0;
  align-self: center;

  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    padding: 15px 0;
    background: ${(props) => lighten(0.01, props.theme.colors.textarea)};
    border: 0;
    border-radius: 12px;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
    resize: none;
    transition: 0.3s background;

    &:focus {
      background: ${(props) => lighten(0.05, props.theme.colors.textarea)};

      & + button {
        display: block;
      }
    }

    ::placeholder {
      padding-top: 20px;
      font-weight: bold;
    }
  }

  button {
    display: none;
  }

  textarea + button {
    margin-top: 15px;
  }
`;

export const QuestionButton = styled.button`
  width: 100px;
  padding: 10px;
  background: inherit;
  border: 1px solid ${(props) => props.theme.colors.quaternary};
  border-radius: 50px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  align-self: flex-end;

  span {
    font-size: 15px;
    color: ${(props) => props.theme.colors.quaternary};
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    background: ${(props) =>
      props.theme.title === 'dark'
        ? lighten(0.05, props.theme.colors.background)
        : darken(0.05, props.theme.colors.background)};

    span,
    svg {
      color: ${(props) => props.theme.colors.icon} !important;
    }
  }
`;

export const TimelineSelector = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 20px 0;
  background: ${(props) => props.theme.colors.background};

  .focused {
    color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
  }

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
`;

export const Selector = styled.a`
  cursor: pointer;
`;
