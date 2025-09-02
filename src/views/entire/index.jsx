import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchEntireRoomListAction } from '@/store/modules/entire/createActions'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(function Entire(props) {
  // 可以在这发送网络请求,但逻辑在组件里面不好
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchEntireRoomListAction())
      dispatch(changeHeaderConfigAction({
        isFixed: true,
        isAlpha: false
      }))

      // 依赖要填入display,这可确保当任何这些依赖项发生更改时，效果会重新运行，从而防止过时的闭包和意外行为
  }, [dispatch])

  return ( 
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire
