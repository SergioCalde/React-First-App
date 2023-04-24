import { render } from '@testing-library/react';

//https://www.robinwieruch.de/vitest-react-testing-library/

import App from './App';

// describe('App', () => {
//   it('renders headline', () => {
//     render(<App title="React" />);

//     screen.debug();

//     // check if App components renders headlineh
//   });
// });

test('renders without crashing', async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Última búsqueda/i)
  expect(title).toBeInTheDocument()
});