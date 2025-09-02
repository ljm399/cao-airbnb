import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)

    // location.pathname是路由的路径,当路由的路径改变时,会执行这个函数,从而实现路由的跳转
  }, [location.pathname])
}