import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/homeBanner'  
import  { HomeWrapper }  from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from '@/utils'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

export default memo(function Home() {

  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    // 虽然Object.keys()里面是undefined会导致报错,但总比你不知道哪里报错好,所以不用设置默认值
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)


  // 派发异步事件
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({
      isFixed: true,
      isAlpha: true
    }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />

      <div className="content">
      {!isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}
      {!isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
      {!isEmptyObject(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo} />}
      {!isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
      {!isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
      {!isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})
