import React from 'react';
import { Wrapper } from './Styled';

type Props = {
  text?: any;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const text = props?.text ?? 'just a button';
  return <Wrapper onClick={props?.onClick}>{text}</Wrapper>;
};

export default Button;
