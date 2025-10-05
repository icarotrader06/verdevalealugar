import { render, screen } from '@testing-library/react'
import Home from './Home'

test('renderiza a Home com componentes principais', () => {
  render(<Home />)

  // Verifica se o lead form (por label) aparece na página
  expect(screen.getByLabelText(/Nome completo/i)).toBeInTheDocument()
})
