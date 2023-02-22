import React, { useCallback } from 'react';
import { Wrapper } from './Styled';

const decimalNumberRegex = /^[\d]*\.?[\d]*$/;

type Props = {
  value?: string;
  onChange?: (e?: any) => void;
  onlyNumber?: boolean;
};

const Input = (props: Props) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = e.target.value;
      if (props.onlyNumber) {
        // 確定是數字的才 call onChange
        if (decimalNumberRegex.test(nextValue)) {
          return props?.onChange?.(nextValue);
        }
      } else {
        return props?.onChange?.(e.target.value);
      }
    },
    [props]
  );

  return (
    <Wrapper>
      <input type="text" value={props?.value} onChange={onChange} />
    </Wrapper>
  );
};

export default Input;
