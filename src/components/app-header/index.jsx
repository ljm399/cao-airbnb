import React, { memo, useState, useRef, useEffect } from 'react'
import { AppHeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { useScrollPosition } from '@/hooks'
import { ThemeProvider } from 'styled-components'

export default memo(function AppHeader() {
  const [ isSearch, setIsSearch ] = useState(false)
  const { isFixed, isAlpha } = useSelector((state) => ({
    isFixed: state.main.headerConfig.isFixed,
    isAlpha: state.main.headerConfig.isAlpha
  }), shallowEqual) 

  const { scrollY } = useScrollPosition()
  const prevScrollY = useRef(0)

  // 使用useEffect处理滚动逻辑，避免在渲染期间执行副作用
  useEffect(() => {
    // 搜索栏没有出来,就不断记录值
    if(!isSearch) {
      prevScrollY.current = scrollY
    }
    // 出来时.只要滚动距离大于之前距离的30,就隐藏
    else if (isSearch && Math.abs(scrollY - prevScrollY.current) > 30) {
      setIsSearch(false)
    }
  }, [scrollY, isSearch])
  
  const topAlpha = isAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{topAlpha}}>
      <AppHeaderWrapper >
        <div className={classNames(`content`, {fixed: isFixed})}>
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={topAlpha || isSearch} searchBarClick={() => setIsSearch(!isSearch)}/>
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={topAlpha || isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
      </AppHeaderWrapper>
    </ThemeProvider>
  )
})
