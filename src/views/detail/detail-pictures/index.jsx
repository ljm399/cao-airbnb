import React, { memo, useState } from 'react'
import { DetailPicWrapper } from './style'
import { useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPic = memo(function DetailPic(props) {
  const [showBrowser, setShowBrowser] = useState(false)

  // 箭头函数返回对象快捷方式: () => ({})  等于 () => return {}
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }))
  const closeBrowser = () => {
    setShowBrowser(false)
  }

  return (
    <DetailPicWrapper>
      <div className="pictures">
        <div className="left" onClick={e => setShowBrowser(true)}>

          {/* onClick事件放在img组件中就会无效 */}
          {/* 原因: CSS 样式问题：.cover div 可能覆盖了整个区域，阻止了点击事件
              z-index 层级问题：cover 元素可能在上层，拦截了点击事件
              pointer-events 被禁用：CSS 中可能设置了 pointer-events: none */}
            
          <img src={detailInfo?.picture_urls?.[0]} alt="" />
          <div className="cover"></div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className="item" key={item} onClick={e => setShowBrowser(true)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
        <div className="show-btn" onClick={e => setShowBrowser(true)}>显示图片</div>
        {showBrowser && <PictureBrowser closeBrowser={closeBrowser} pictureUrls={detailInfo?.picture_urls}></PictureBrowser>}
      </div>

    </DetailPicWrapper>
  )
})


export default DetailPic
