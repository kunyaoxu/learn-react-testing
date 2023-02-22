import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

// TODO: 初始值可能也要一起列入測試

const WrappedCmp = ({ onlyNumber = false, defaultValue = '' }) => {
  const [value, setValue] = useState(defaultValue);

  return <Input value={value} onChange={setValue} onlyNumber={onlyNumber} />;
};

test('input some text', () => {
  render(<WrappedCmp />);
  const inputDom = screen.getAllByRole('textbox')[0] as HTMLInputElement;

  // 初始值是否為空
  expect(inputDom?.value).toBe('');

  // 輸入一些文字 case 1
  fireEvent.change(inputDom, { target: { value: '888999' } });
  expect(inputDom.value).toBe('888999');

  // 輸入一些文字 case 2
  fireEvent.change(inputDom, { target: { value: 'asdf456' } });
  expect(inputDom.value).toBe('asdf456');
});

test('onlyNumber string', () => {
  render(<WrappedCmp onlyNumber />);
  const inputDom = screen.getAllByRole('textbox')[0] as HTMLInputElement;
  // 初始值是否為空
  expect(inputDom?.value).toBe('');

  // 輸入一些文字 case 1
  fireEvent.change(inputDom, { target: { value: '88d8999' } });
  expect(inputDom.value).toBe('');

  // 輸入一些文字 case 2
  fireEvent.change(inputDom, { target: { value: '999.888' } });
  expect(inputDom.value).toBe('999.888');

  // 輸入一些文字 case 3
  fireEvent.change(inputDom, { target: { value: '999' } });
  expect(inputDom.value).toBe('999');
});
