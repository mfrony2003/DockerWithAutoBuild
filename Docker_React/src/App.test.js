import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// sudo service docker start
// docker-compose rm -f
// docker-compose pull
// docker-compose up --build -d
// # Run some tests
// ./tests
// docker-compose stop -t 1