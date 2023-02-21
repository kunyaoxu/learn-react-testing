import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

// React Testing Library 寫法

test('renders with or without a text', () => {
  let view = render(<Button />);
  expect(view.container.textContent).toBe('just a button');

  view = render(<Button text="btn" />);
  expect(view.container.textContent).toBe('btn');

  // screen 的用法
  view = render(<Button text="按鈕" />);
  const result = screen.getByText('按鈕');
  expect(result).toBeInTheDocument();
});

test('button click', () => {
  const onClickHandler = jest.fn();
  let view = render(<Button text="button" onClick={onClickHandler} />);
  const { firstChild } = view?.container;
  // 點擊第一次
  fireEvent.click(firstChild);
  expect(onClickHandler).toHaveBeenCalledTimes(1);
  // 點擊第二次
  fireEvent.click(firstChild);
  expect(onClickHandler).toHaveBeenCalledTimes(2);
});
