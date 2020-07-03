import React from 'react';
import PropTypes from 'prop-types';

import Question from '../Question';
import UserItem from '../UserItem';

import { Container, QuestionList } from './styles';

export default function TimeLine({ type }) {
  const itemType = type;

  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function renderItem(t, i) {
    return t === 'question' ? <Question key={i} /> : <UserItem key={i} />;
  }
  return (
    <Container>
      <QuestionList>
        {l.map((i) => {
          return renderItem(itemType, i);
        })}
      </QuestionList>
    </Container>
  );
}

TimeLine.propTypes = {
  type: PropTypes.string,
};

TimeLine.defaultProps = {
  type: 'question',
};
