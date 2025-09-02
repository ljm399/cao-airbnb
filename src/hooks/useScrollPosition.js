import { useEffect, useState } from 'react'
import { throttle } from 'lodash'

export const useScrollPosition = () => {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 16) // 约60fps，更流畅的滚动响应
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}