import React from 'react'
import { render, screen } from '@testing-library/react'
import Language from '../language'

describe('LanguageComponentTests', () => {
  const locationMock = {}

  test('shows available languages', () => {
    render(<Language languages={['en', 'pt']} defaultLang={'pt'} />)

    expect(screen.queryByText('en')).toBeInTheDocument()
    expect(screen.getByText('| pt')).toBeInTheDocument()
  })

  test('shows nothing when no language was provided', () => {
    render(<Language languages={[]} defaultLang={'en'} />)

    expect(screen.queryByText('en')).not.toBeInTheDocument()
  })
})
