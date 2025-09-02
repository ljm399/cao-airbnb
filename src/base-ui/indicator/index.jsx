import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from './style'
const Indicator = memo(function Indicator(props) {

  // selectIndex是传入的,然后赋值给index
  const { selectIndex : index = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // 1.获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[index]

    // 距离于父元素的边界,不是本身! --- 条件没弄清
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    // 父元素content的宽度
    // 可见宽度
    const contentWidth = contentRef.current.clientWidth
    // 总宽度
    const contentScroll = contentRef.current.scrollWidth
    // 总可移动宽度
    const totalDisatance = contentScroll - contentWidth

    // 3.获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
       
    //特殊情况
    if (distance < 0) distance =0
    if (distance > totalDisatance) distance = totalDisatance


    // 6.改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [index])

  return (
    <IndicatorWrapper>
      <div className="content-i" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator
