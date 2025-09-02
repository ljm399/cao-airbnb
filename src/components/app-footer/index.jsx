import React, { memo } from 'react'
import AppFooterWrapper from './style'
import footerData from '@/assets/data/footerData.json'

export default memo(function AppFooter() {
  return (
    <AppFooterWrapper>
      <div className="footer-content">
        <div className="top">
          {footerData.footerData.map((item, index) => {
            return (
              <div className="item" key={item.name}>
                <div className="name">{item.name}</div>
                <div className="list">
                  {item.list.map((iten, indey) => {
                    return (
                      <div className="iten" key={iten}>
                        {iten}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="bottom">
          <div className="info">
            <span className="copyright">© 2022 Airbnb, Inc. All rights reserved.</span>
            <span className="split">·</span>
            <span className="service">隐私政策</span>
            <span className="split">·</span>
            <span className="service">网站地图</span>
            <span className="split">·</span>
            <span className="service">全国旅游投诉渠道 12301</span>
          </div>
        </div>
      </div>
    </AppFooterWrapper>
  )
})
