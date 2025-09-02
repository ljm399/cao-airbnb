import React, { memo, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { PictureBrowserWrapper } from './style'
import { CloseCircleOutlined, LeftOutlined, RightOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Indicator from "@/base-ui/indicator"

const PictureBrowser = memo(function PictureBrowser(props) {

  // 把closeBrowser当作参数，为了利用父组件中记录的showBrowser 状态
  const { pictureUrls, closeBrowser } = props
  const [curIndex, setCurIndex] = useState(0)
  const nodeRef = useRef(null)
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const closeBtnClickHandle = () => {
    if(closeBrowser) {
      closeBrowser()
    }
  }

  const controlClick = (isRight) => {
    let newIndex = isRight ? curIndex + 1 : curIndex - 1;
    if(newIndex < 0) newIndex = pictureUrls.length -1;
    if(newIndex > pictureUrls.length -1) newIndex = 0;
    setCurIndex(newIndex)
    setIsNext(isRight) // 记录点击的是下一张还是上一张，用于控制图片的过渡方向
  }

  function picClickHandle(index) {
    setCurIndex(index)
    setIsNext(index > curIndex)
  }

  return (
    <PictureBrowserWrapper in={true} timeout={300} classNames="fade" unmountOnExit isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={e => closeBtnClickHandle()}>
          <CloseCircleOutlined style={{ fontSize: '50px', color: "#fff" }}/>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlClick(false)}>
            <LeftOutlined style={{ fontSize: '80px', color: "#fff" }} />
          </div>
          <div className="btn right" onClick={e => controlClick(true)}>
            <RightOutlined style={{ fontSize: '80px', color: "#fff" }} />
          </div>
        </div>

        <div className="picture">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={pictureUrls[curIndex]}
              classNames="pic"
              timeout={300}
              nodeRef={nodeRef}
            >
              {/* CSSTransition中一定要加nodeRef原因 */}
              {/* 
                旧方式（使用 findDOMNode）:
                CSSTransition 内部 → 调用 findDOMNode() → 遍历组件树 → 找到 DOM 节点 → 应用 CSS 类

                新方式（使用 nodeRef）:
                CSSTransition 内部 → 直接使用 nodeRef.current → 应用 CSS 类
              */}

              <img ref={nodeRef} src={pictureUrls[curIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>

      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{curIndex + 1} / {pictureUrls.length}</span>
              <span>room apartment图片{curIndex+1}</span>
            </div>
            <div className="toggle" onClick={e => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示'}图片列表</span>
              {showList ? <CaretDownOutlined /> : <CaretUpOutlined />}
            </div>
          </div>
          <div className="pic-list">
            <Indicator selectIndex={curIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div
                      className={`item ${index === curIndex ? 'active' : ''}`}
                      key={item}
                      onClick={e => picClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.prototype = {
  pictureUrls: PropTypes.array,
  closeBrowser: PropTypes.func
}

export default PictureBrowser
