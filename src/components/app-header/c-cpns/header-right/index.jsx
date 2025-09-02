import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './styel'
import IconMenu from '@/assets/svg/IconMenu'
import IconGlobal from '@/assets/svg/IconGlobal'

export default memo(function HeaderRight() {
  const [showPanle, setShowPanle] = useState(false)

  // 副作用代码: 因为点击窗口任何地方就会关闭面板
  useEffect(() => {
    function windowHandleClick() {
      setShowPanle(false)
    }
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  },[])

  const panleClickHandler = () => {
    setShowPanle(true)
  }
  return (
    <HeaderRightWrapper>
      <div className="global">
        <IconGlobal/>
      </div>
      <div className="menu"  onClick={panleClickHandler}>
        <IconMenu/>
        {showPanle && (
          <div className="panle">
            <div className="help">帮助中心</div>
            <div className="search">寻找运营伙伴</div>
            <div className="login">登录或注册</div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  )
})
