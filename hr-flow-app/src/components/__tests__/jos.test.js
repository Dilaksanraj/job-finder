import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Job from '../jobs/jobs';

// Mock the service function
jest.mock('../../service/jobs.service', () => ({
    getAllJobList: jest.fn(() => Promise.resolve({ data: [], paginationProps: { total: 0, count: 0 } })),
}));

describe('Job Component', () => {
    test('renders component without crashing', () => {
        render(<Job />);
        // Check if the component renders without crashing
        expect(screen.getByText(/Go back/i)).toBeInTheDocument();
    });
});

