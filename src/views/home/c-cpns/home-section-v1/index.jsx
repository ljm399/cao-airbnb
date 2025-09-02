import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HomeSectionV1Wrapper } from './style'
import SectionRoom from '@/components/section-room'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo(function HomeSectionV1(props) {
  const { infoData } = props

  return (
    <HomeSectionV1Wrapper>
      <div className="content">
          

          <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
          {/* 封装 */}
          {/* <ul>
            {
              // 必须加? 因为第一次list是undefined会报错
              goodPriceInfo.list?.map((item) => {
                return <RoomItem key={item.id} itemData={item} />
                })
                }
            </ul> */}
          <SectionRoom roomList={infoData.list} />
          <SectionFooter/>
      </div>
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1
