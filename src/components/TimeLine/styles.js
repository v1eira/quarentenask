import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PostList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li + li {
    margin-top: 10px;
  }
`;
