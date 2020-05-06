import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;

  background: #000;
`;

export const Header = styled.div`
  background: #000;
  width: 100%;
  height: 27px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 20px;

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

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 90px 0 20px;
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
