# React useToggle

useToggle is just a useState dedicated for boolean type. 

It comes with toggle method as well as direct on / off and open / close 

## Getting started

```
yarn add react-use-toggle-hook
```

## Usage
useToggle hook returns
```jsx
interface UseToggleResponse {
  value: boolean
  toggle: () => void
  on: () => void
  off: () => void
  open: () => void
  close: () => void
}
```


```jsx
import React, { useState, useEffect } from 'react'
import { useToggle } from 'react-use-toggle-hook'

export const CollapsableSection: React.FC = () => {
    const { value, toggle, close } = useToggle();
        
    return (<section className={value ? 'collapse' : 'expand'}>
        <h1 onClick={toggle}>Title</h1>
        <button type="button" onClick={close}>x</button>
        <div className="content">
          <p>Lorem ipsum ..</p>
        </div>
    </section>)
}
```

## Multiple instance at ones

```jsx
import React, { useState, useEffect } from 'react'
import { useToggle } from 'react-use-toggle-hook'

export const CollapsableSection: React.FC = () => {
    const { value: isDisabled, toggle: toggleDisabled, close: disable } = useToggle();
    const { value: isReadonly, on: setReadonly, off: setWritable } = useToggle();
        
    return (<section>
      <input disabled={isDisabled} readOnly={isReadonly} />
    </section>)
}
```
