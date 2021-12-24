import React from 'react'
import { screen, render } from '@testing-library/react'
import { Form } from './index'

describe('When the form is mounted', () => {
    it('there must be a create product form page', () => {
        render(<Form />)
        
    })

})