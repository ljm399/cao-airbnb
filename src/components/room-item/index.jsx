import React, { memo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { RoomItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo(function RoomItem(props) {
  const { itemData, itemWidth, itemClick } = props
  const [index, setSelectedIndex] = useState(0)

  const carouselRef = useRef()
  const controlClick = (isRight, e) => {
    // 用ref绑定carousel组件，为了调用里面的next和prev方法
    isRight ? carouselRef.current.next() : carouselRef.current.prev()

    let newIndex = isRight ? index + 1: index -1;
    const length = itemData.picture_urls.length
    if(newIndex < 0) newIndex = length -1
    if(newIndex > length -1) newIndex = 0
    setSelectedIndex(newIndex)

    // 阻止冒泡: 点击按钮会轮播而不是直接跳转了
    e.stopPropagation()
  }

  const onePicEl = (
     <div className="cover">
        <img src={itemData.picture_url} alt="" />
    </div> 
  )
  const sliderEl = (
    <div className="swiper">
    <div className="control">
      <div className="btn left" onClick={e => controlClick(false,e)}>
        <LeftOutlined style={{ fontSize: '40px', color: "rgba(255, 255, 255, 0.6)" }} />
      </div>
      <div className="btn right" onClick={e => controlClick(true,e)}>
        <RightOutlined style={{ fontSize: '40px', color: "rgba(255, 255, 255, 0.6)" }} />
      </div>
    </div>
    <Carousel dots={false} ref={carouselRef}>
      {
        itemData?.picture_urls?.map((item, index) => {
          return (
            <div className="cover" key={index} >
              <img src={item} alt="" />
            </div>
          )
        })
      }
    </Carousel>
    <div className="indicator">
      <Indicator selectIndex={index}>
        {
          itemData?.picture_urls?.map((item, curIndex) => {
            return (
              <div className='item-dot' key={item}>
                <span className={classNames("dot", {
                  active: index === curIndex,
                  secondary: Math.abs(index - curIndex) === 1,
                  third: Math.abs(index - curIndex) === 2,
                  
                })}></span>
              </div>
            )
          })
        }
      </Indicator>
    </div>
  </div>
  )

  function itemClickHandler() {
    if(itemClick) itemClick(itemData)
  }

  /* 下面开头添加$的原因
    不添加会报错
    不会传递给 DOM：以 $ 开头的 props 只用于样式计算，不会传递给底层的 DOM 元素
    性能更好：避免了不必要的 DOM 属性
    消除警告：React 不会再警告无效的 DOM 属性
    语义明确：明确标识这是仅供样式使用的 props
  */
  return (
    <RoomItemWrapper 
    $itemWidth={itemWidth}
    onClick={itemClickHandler}
    >  
      { !itemData.picture_urls ? onePicEl: sliderEl}
      <div className="desc">
        <div className="message">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="title">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
      </div>
      <Rating defaultValue={itemData.reviews_count ?? 5} precision={0.1} readOnly 
      sx={{ 
        fontSize: "12px",
        color: `${itemData.star_rating_color}`
      }}
      /> 
   </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
