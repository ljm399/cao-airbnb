import React, { memo } from 'react'
import { ScrollViewWrapper } from './style'
import { useState, useRef, useEffect } from 'react'
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons'
import { useTheme } from 'styled-components'

const ScrollView = memo(function ScrollView(props) {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const PreIndex = useRef(0)
  const theme = useTheme()

  // 多用useRef 因为useRef 不会触发组件的重新渲染,性能低
  const TotalDistance = useRef(0)
  const scrollContentRef = useRef()

  useEffect(() => {
    /* 解释scroll属性
      属性	    横向（X轴）	  纵向（Y轴）
    内容总大小	scrollWidth	scrollHeight
    可见大小	clientWidth	clientHeight
    已滚动距离	scrollLeft	scrollTop
    最大滚动	scrollWidth - clientWidth =	scrollHeight - clientHeight
    */
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    const maxScrollLeft = scrollWidth - clientWidth
    setShowRight(maxScrollLeft > 0)
    TotalDistance.current = maxScrollLeft
  }, [props.children])

  // 封装
  // const rightClick = () => {
  //   const newIndex = PreIndex.current + 1
  //   const newEl = scrollContentRef.current.children[newIndex]

  //   // 你的疑点来自没看清条件即newEl.offsetLeft,它一直相对则最长元素的左边即scroll-content,而不是可视区域
  //   const newElOffsetLeft = newEl.offsetLeft
  //   scrollContentRef.current.style.transform = `translateX(-${newElOffsetLeft}px)`
  //   PreIndex.current = newIndex

  //   // 第二个: TotalDistance.current - newElOffsetLeft就是可移动的区域
  //   setShowRight(TotalDistance.current > newElOffsetLeft)
  //   // console.log(newElOffsetLeft)
  //   setShowLeft(newElOffsetLeft > 0)
  // }

  // const leftClick = () => {
  //   const newIndex = PreIndex.current - 1
  //   const newEl = scrollContentRef.current.children[newIndex]
  //   const newElOffsetLeft = newEl.offsetLeft
  //   scrollContentRef.current.style.transform = `translateX(-${newElOffsetLeft}px)`
  //   PreIndex.current = newIndex

  //   // 疑惑点: 子元素开始距离为0,所以左边按钮不显示,当右边按钮点击后,index变为1,newElOffsetLeft>0,触发的是rightClick不是leftClick
  //   setShowLeft(newElOffsetLeft > 0)
  // }

  const controlClick = (isRight) => {
    const newIndex = isRight ? PreIndex.current + 1 : PreIndex.current - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newElOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translateX(-${newElOffsetLeft}px)`
    PreIndex.current = newIndex
    setShowRight(TotalDistance.current > newElOffsetLeft)  
    setShowLeft(newElOffsetLeft > 0)
  }

  return (
    <ScrollViewWrapper>
      {showLeft && <LeftCircleTwoTone onClick={() => controlClick(false)} style={{ fontSize: '20px' }} twoToneColor={theme.color.primary} />}
      {showRight && <RightCircleTwoTone onClick={() => controlClick(true)} style={{ fontSize: '20px' }} twoToneColor={theme.color.primary} />}

    <div className="scroll">
      <div className="scroll-content" ref={scrollContentRef}>
        {props.children}
      </div>
    </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView
