import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import HomePage from '../app/page';

afterEach(cleanup);

describe('Home page', () => {
  it('introduces the application', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1, name: 'FPL AI Manager' })).toBeDefined();
    expect(screen.getByText('Make better Fantasy Premier League decisions.')).toBeDefined();
  });

  it('clearly identifies team lookup as unavailable', () => {
    render(<HomePage />);
    expect(screen.getByRole('region', { name: 'Your team dashboard' })).toBeDefined();
    expect(screen.getByText('Team lookup is not available yet.')).toBeDefined();
    expect(screen.queryByRole('textbox')).toBeNull();
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('does not request account credentials', () => {
    const { container } = render(<HomePage />);
    expect(container.querySelector('input[type="password"]')).toBeNull();
    expect(screen.getByText(/never ask for your FPL password/)).toBeDefined();
  });
});
