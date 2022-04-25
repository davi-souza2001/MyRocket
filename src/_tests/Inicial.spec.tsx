import { render } from '@testing-library/react'
import LoginPage from '../pages/login'

describe('Login section', () => {
    it('first test app component', () => {
        const { getByText } = render(<LoginPage />)

        expect(getByText('WELCOME ABOARD!')).toBeTruthy()
    })

    it('alo', () => {
        expect(1 + 1).toBe(2)
    })
})