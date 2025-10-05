import { render, screen, fireEvent } from '@testing-library/react'
import LeadForm from './LeadForm'

describe('LeadForm', () => {
  test('abre o WhatsApp ao submeter o formulário', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)

    render(<LeadForm />)

    fireEvent.change(screen.getByLabelText(/Nome completo/i), { target: { value: 'Fulano' } })
    fireEvent.change(screen.getByLabelText(/Telefone/i), { target: { value: '(12) 99999-9999' } })
    fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'fulano@test.com' } })
    fireEvent.change(screen.getByLabelText(/Endereço do imóvel/i), { target: { value: 'Rua Teste, 1' } })
    fireEvent.change(screen.getByLabelText(/Tipo do imóvel/i), { target: { value: 'casa' } })

    fireEvent.click(screen.getByRole('button', { name: /Cadastrar meu imóvel agora/i }))

    expect(openSpy).toHaveBeenCalled()

    openSpy.mockRestore()
  })
})
