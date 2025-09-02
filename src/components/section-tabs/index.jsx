import React, { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { SectionTabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo(function SectionTabs(props) {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  
  // 必须加依赖(tabClick)
  /* 
    如果你在 useCallback 内部使用了外部的变量或函数（比如从 props 传来的 tabClick），但没有把它放进依赖数组，那么 useCallback 内部引用的 tabClick 可能会变成一个“过时”的版本。也就是说，即使父组件传递了一个新的 tabClick 函数下来，你的组件可能仍然在使用上一次渲染时的旧函数，这会导致意想不到的 bug
  */
  const handleItemClick = useCallback((index, name) => {
    setCurrentIndex(index)
    tabClick(index, name)
  }, [tabClick])


  return (
    <SectionTabsWrapper>
      <ScrollView>
      {
        tabNames.map((item, index) => {
          return <div key={index} className={classNames("item", {active: index === currentIndex})} onClick={() => handleItemClick(index, item)}>{item}</div>
        })
        //onClick={myFunction}: 传递一个函数引用。这个函数将在事件发生时被调用。
        //onClick={myFunction()}: 立即调用函数，并将函数的返回值赋给 onClick。这几乎总是一个错误，除非 myFunction 的返回值是另一个函数。
        //onClick={() => myFunction()}: 传递一个新的匿名函数定义。这个匿名函数会在事件发生时被调用，然后它再去调用 myFunction。这是在需要传递参数时的标准做法
      }
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
}

export default SectionTabs
