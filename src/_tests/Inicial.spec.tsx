import { render } from '@testing-library/react'
import Login from '../pages/login'

describe('Header section', () => {
    it('first test app component', () => {
        const { getByText } = render(<Login />)

        expect(getByText('WELCOME ABOARD!')).toBeTruthy()
    })

    it('alo', () => {
        expect(1 + 1).toBe(2)
    })
})
