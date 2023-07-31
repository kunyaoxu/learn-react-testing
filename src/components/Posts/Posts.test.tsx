import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Posts from './Posts';

jest.mock('../../apis/posts');

// TODO: 這樣可以覆寫 __mocks__ 底下的 mock 設定
// jest.mock('apis/posts', () => ({
//   fetchAllPosts: () => {
//     return Promise.resolve({
//       data: [
//         { id: 1, title: 'title31', author: 'author1' },
//         { id: 2, title: 'title32', author: 'author2' },
//         { id: 3, title: 'title313', author: 'author3' },
//       ],
//     });
//   },
// }));

describe('Posts render', () => {
  test('renders with mock api', async () => {
    render(<Posts />);

    await waitFor(() => {
      expect(screen.getByText('title1')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('title2')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('title13')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('first post: title1')).toBeInTheDocument();
    });
  });
});
