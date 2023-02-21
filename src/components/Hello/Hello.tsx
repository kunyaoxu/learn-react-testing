import React from 'react';
import { Wrapper } from './Styled';

const Hello = (props: { name?: any }) => {
  if (props.name) {
    return <Wrapper>Hello, {props.name}!</Wrapper>;
  } else {
    return <Wrapper className="default">Hello, world</Wrapper>;
  }
};

export default Hello;
