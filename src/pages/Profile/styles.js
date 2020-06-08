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

  button {
    outline: none;
  }

  textarea {
    outline: none;
  }

  @media (max-width: 450px) {
    height: calc(100vh - 53px);
  }
`;

export const UserProfile = styled.div`
  width: 680px;
  margin: 68px auto 0;
  background: transparent;

  border-right: 1px solid #333;
  border-left: 1px solid #333;

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
    color: #fff;
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
    color: #fff;
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
    color: #999;
    margin-left: 10px;
  }
`;

export const EditButton = styled.button`
  margin-left: auto;
  cursor: pointer;

  border: 1px solid #999;
  border-radius: 20px;
  background: inherit;
  padding: 10px 15px;

  transition: 0.2s;

  span {
    font-size: 15px;
    color: #999;
    transition: 0.2s;
  }

  &:hover {
    border-color: #fff;
    background: ${lighten(0.05, '#000')};
    span {
      color: #fff;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  a {
    color: #999;
    text-decoration: underline;

    &:hover {
      color: #fff;
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
      text-decoration-color: #fff;
    }
  }

  span {
    color: #999;
  }

  .following-spaced {
    margin-left: 5px;
    color: #fff;
    font-weight: bold;
  }
`;

export const Followers = styled.div`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #fff;
    }
  }

  span {
    color: #fff;
    font-weight: bold;
  }

  .followers-spaced {
    margin-left: 5px;
    color: #999;
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
    color: #999;
    display: none;
  }

  transition: 0.2s;

  &:hover {
    border-color: #fff;
    background: ${lighten(0.05, '#000')};

    span {
      display: block;
    }

    svg {
      width: 15px !important;
    }

    span,
    svg {
      color: #fff !important;
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
    background: ${lighten(0.01, '#0d0d0d')};
    border: 0;
    border-radius: 12px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    resize: none;
    transition: 0.3s background;

    &:focus {
      background: ${lighten(0.05, '#0d0d0d')};

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
  border: 1px solid #999;
  border-radius: 50px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  align-self: flex-end;

  span {
    font-size: 15px;
    color: #999;
  }

  &:hover {
    border-color: #fff;
    background: ${lighten(0.05, '#000')};

    span,
    svg {
      color: #fff !important;
    }
  }
`;

export const TimelineSelector = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 20px 0;
  background: #000;

  .focused {
    color: #fff;
    border-color: #fff;
  }

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
`;

export const Selector = styled.a`
  cursor: pointer;
`;
