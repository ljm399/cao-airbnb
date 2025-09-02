import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HomeLongforWrapper } from './style'
import SectionHeader from '@/components/section-header' 
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'
const HomeLongfor = memo(function HomeLongfor(props) {
  const { infoData } = props
  return (
    <HomeLongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>  
        {
          infoData.list?.map(item => {
            return(
              <LongforItem key={item.city} itemData={item} />
            )
          })
        }
        </ScrollView>
      </div>
    </HomeLongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor
