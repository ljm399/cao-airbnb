import React, { memo } from 'react'
import { DemoWrapper } from './style'
import SearchTabs from '@/components/app-header/c-cpns/header-center/c-cpns/search-tabs'
import SearchSections from '@/components/app-header/c-cpns/header-center/c-cpns/search-sections'

const Demo = memo(function Demo(props) {


  return (
    <DemoWrapper>
      <SearchTabs></SearchTabs>
      <SearchSections></SearchSections>
    </DemoWrapper>
  )
})

export default Demo
