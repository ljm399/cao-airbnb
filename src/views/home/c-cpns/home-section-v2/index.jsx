import React, { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { HomeSectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRoom from '@/components/section-room'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo(function HomeSectionV2(props) {
// 从props中获取infoData
  const { infoData } = props

// 定义内部的state
  // useState初始值问题
  // 该组件开始会渲染2次,开始时一次,网络请求后数据变化时一次
  // 但初始值只在第一次渲染时生效,其他次渲染时,初始值为undefined

  // 解决方式一:
  // const initialName = infoData.dest_address?.[0]?.name || '佛山'

  // 解决方式二
  // const initialName = Object.keys(infoData.dest_list ?? {})[0] || '佛山'

  // 解决方式三(推荐): 让其第一次不渲染就行了,去其父组件那一起
  // 父组件中:{discountInfo && <HomeSectionV2 infoData={discountInfo} />}
  // 要是Object.keys()里面是undefined,则报错
  const initialName = Object.keys(infoData.dest_list ?? {})[0]
  const [name, setName] = useState(initialName)
  //map 会对数组中的每个元素进行处理，并返回一个新的数组
  const tabNames = infoData.dest_address?.map(item => item.name)

  //方式四: 会渲染三次,性能低,不推荐
  // useEffect(() => {
  //   setName(Object.keys(infoData.dest_list)[0] || {})
  // }, [infoData])

  // 事件处理函数
  const handleTabClick = useCallback((index, name) => {
    setName(name)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      <div className="content">
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <SectionTabs tabNames={tabNames} tabClick={handleTabClick} />
        <SectionRoom roomList={infoData.dest_list?.[name]} itemWidth="33.3%" />
        <SectionFooter name={name} />
      </div>
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
