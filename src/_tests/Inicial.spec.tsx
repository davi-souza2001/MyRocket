import { render } from '@testing-library/react'
import Principal from '../pages/index'

describe('Login section', () => {
    it('handle test', () => {
        const { getByText } = render(<Principal />)

        expect(getByText('Principal')).toBeTruthy()
    })

    it('alo', () => {
        expect(1 + 1).toBe(2)
    })
})