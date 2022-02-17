import { render } from '@testing-library/react'
import Inicial from './index'

test('sub', () => {
    const { getByText } = render(<Inicial/>)

    expect(getByText('Olaaa')).toBeTruthy()
})