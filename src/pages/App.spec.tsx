import { render } from '@testing-library/react'
import Principal from './index'

test('sum', () => {
    const { getByText } = render(<Principal/>)

    expect(getByText('Principal')).toBeTruthy()
})