import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: visible;
  position: fixed;
  background: #000;
`;

export const Header = styled.div`
  background: #000;
  width: 100%;
  border-radius: 2px;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 20px;
  z-index: 1;

  border-bottom: 1px solid #333;

  a {
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Profile = styled.div`
  width: 680px;
  margin: 68px auto 0;
  background: black;

  border-right: 1px solid #333;
  border-left: 1px solid #333;

  @media (max-width: 700px) {
    border: none;
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

  span {
    font-size: 15px;
    color: #999;
  }

  &:hover {
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

  div + div {
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

  span + span {
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

  span + span {
    margin-left: 5px;
    color: #999;
    font-weight: normal;
  }
`;

export const Message = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 25px 0;
  align-self: center;
  text-align: center;
  border-radius: 12px;

  background: #0d0d0d;

  span {
    color: #fff;
    font-size: 16px;
    word-wrap: break-word;
  }
`;

export const TimelineSelector = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 20px 0;
  background: #000;

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
