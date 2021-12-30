import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Footer from './footer';
const history = createMemoryHistory();

describe('Component: Footer', () => {

  it('should render Footer', () => {
    render(
      <Router history={history}>
        <Footer />
      </Router>);

    expect(screen.getByText(/Магазин гитар, музыкальных инструментов/i)).toBeInTheDocument();
    expect(screen.getByText(/Контакты/i)).toBeInTheDocument();
  });

});
