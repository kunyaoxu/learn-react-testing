import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Posts from './Posts';

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Posts render', () => {
  test('renders with mock api', async () => {
    // Provide the data object to be returned
    mockedAxios.get.mockResolvedValue({
      data: [
        { id: 1, title: 'title1', author: 'author1' },
        { id: 2, title: 'title2', author: 'author2' },
        { id: 3, title: 'title13', author: 'author3' },
      ],
    });
    render(<Posts />);

    await waitFor(() => {
      expect(screen.queryByText('title1')).toBeInTheDocument();
      expect(screen.queryByText('title2')).toBeInTheDocument();
      expect(screen.queryByText('title13')).toBeInTheDocument();
    });
  });
});
