import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px auto 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PostList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li {
    margin-top: 20px;
  }
`;
