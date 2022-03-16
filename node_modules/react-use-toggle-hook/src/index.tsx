import { useCallback, useState } from 'react'
import { useWhenMounted } from 'react-use-when-mounted'

interface UseToggleResponse {
  value: boolean
  toggle: () => void
  on: () => void
  off: () => void
  open: () => void
  close: () => void
}

export const useToggle = (initialValue = false): UseToggleResponse => {
  const whenMounted = useWhenMounted()
  const [value, setValue] = useState(initialValue)
  const open = useCallback(() => whenMounted(() => setValue(true)), [setValue, whenMounted])
  const close = useCallback(() => whenMounted(() => setValue(false)), [setValue, whenMounted])
  const toggle = useCallback(() => whenMounted(() => setValue((p) => !p)), [setValue, whenMounted])

  return {
    value,
    toggle,
    open,
    close,
    on: open,
    off: close,
  }
}
