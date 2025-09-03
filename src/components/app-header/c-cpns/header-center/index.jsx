import React, { memo } from 'react'
import IconSearch from '@/assets/svg/iconSearch'
import { HeaderCenterWrapper } from './styel'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import SearchTitles from '@/assets/data/search-data.json'
import { CSSTransition } from 'react-transition-group' // 导入CSSTransition组件

export default memo(function HeaderCenter(props) {
  const { isSearch = true, searchBarClick = () => {} } = props; // 获取父组件传入的isSearch值，用于控制搜索栏的显示和隐藏

  const [value, setValue] = React.useState(0);
  const titles = SearchTitles.map(item => item.title)

  function searchBarClickHandle() {
    if(searchBarClick) searchBarClick() // 调用父组件传入的searchBarClick函数，用于控制搜索栏的显示和隐藏。
  }

  return (
    <HeaderCenterWrapper>
      <CSSTransition
        in={isSearch}
        timeout={300}
        classNames="search"
        unmountOnExit
      >
        <div className="search-detail">
          <SearchTabs value={value} setValueHandle={(newValue) => setValue(newValue)} titles={titles}></SearchTabs>
          <div className="infos">
            <SearchSections value={value} searchData={SearchTitles[value].searchInfos}></SearchSections>
          </div>
        </div>
      </CSSTransition>

      {/* in={!isSearch} 是把一个布尔值传给 CSSTransition 的 in 属性，用来控制“进入/离开”动画以及是否挂载。
      不是必须传 true。传 true 触发“进入”状态（显示并执行 enter 动画）；传 false 触发“离开”状态（执行 exit 动画，配合 unmountOnExit 会卸载 DOM） */}
      <CSSTransition
        in={!isSearch}
        timeout={300}
        classNames="bar"
        unmountOnExit
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">
            <img src={require('@/assets/img/house.avif')} alt="" />
            <span className='firstItem'>任何地方</span>
            <span>任何时间</span>
            <span className='last'>添加人数</span>
          </div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>
    </HeaderCenterWrapper>
  )
})
