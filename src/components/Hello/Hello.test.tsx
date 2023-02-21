import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
// import { act } from "react-dom/test-utils";
import { act } from '@testing-library/react';
import Hello from './Hello';

// jest 寫法

let container: HTMLDivElement | null = null;
let root: ReactDOM.Root | null = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);

  root = createRoot(container);
});

afterEach(() => {
  act(() => {
    root?.unmount();
    // cleanup on exiting
    unmountComponentAtNode(container!);
    container?.remove();
    container = null;
  });
});

it('renders with or without a name', () => {
  act(() => {
    root?.render(<Hello />);
  });
  expect(container?.textContent).toBe('Hello, world');

  act(() => {
    root?.render(<Hello name="Jenny" />);
  });
  expect(container?.textContent).toBe('Hello, Jenny!');

  act(() => {
    root?.render(<Hello name="鋼鐵人" />);
  });
  expect(container?.textContent).toBe('Hello, 鋼鐵人!');
});
