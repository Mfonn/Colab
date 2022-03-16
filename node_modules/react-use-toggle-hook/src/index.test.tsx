import React from 'react'

import { fireEvent, render } from '@testing-library/react'
import { useToggle } from './index'

const ExampleComponent = ({ init = false }) => {
  const { value, open, close, on, off, toggle } = useToggle(init)

  return (
    <div>
      <span>value: {value.toString()}</span>
      <button type="button" onClick={open}>
        Open
      </button>
      <button type="button" onClick={close}>
        Close
      </button>
      <button type="button" onClick={on}>
        On
      </button>
      <button type="button" onClick={off}>
        Off
      </button>
      <button type="button" onClick={toggle}>
        Toggle
      </button>
    </div>
  )
}

describe('useToggle', () => {
  it('default value', async () => {
    const { findByText } = render(<ExampleComponent />)
    expect(await findByText('value: false')).toBeInTheDocument()
  })

  it('default value passed', async () => {
    const { findByText } = render(<ExampleComponent init />)
    expect(await findByText('value: true')).toBeInTheDocument()
  })

  it('open action', async () => {
    const { findByText } = render(<ExampleComponent />)

    fireEvent.click(await findByText('Open'))
    expect(await findByText('value: true')).toBeInTheDocument()
  })

  it('on action', async () => {
    const { findByText } = render(<ExampleComponent />)

    fireEvent.click(await findByText('On'))
    expect(await findByText('value: true')).toBeInTheDocument()
  })

  it('close action', async () => {
    const { findByText } = render(<ExampleComponent init />)

    fireEvent.click(await findByText('Close'))
    expect(await findByText('value: false')).toBeInTheDocument()
  })

  it('off action', async () => {
    const { findByText } = render(<ExampleComponent init />)

    fireEvent.click(await findByText('Off'))

    expect(await findByText('value: false')).toBeInTheDocument()
  })

  it('toggle action', async () => {
    const { findByText } = render(<ExampleComponent />)

    fireEvent.click(await findByText('Toggle'))

    expect(await findByText('value: true')).toBeInTheDocument()

    fireEvent.click(await findByText('Toggle'))

    expect(await findByText('value: false')).toBeInTheDocument()
  })
})
