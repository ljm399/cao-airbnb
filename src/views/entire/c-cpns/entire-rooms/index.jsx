import React, { memo, useCallback } from 'react'
import { EntireRoomsWrapper } from './style'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(function EntireRooms(props) {
  const { roomList, totalCount, isLoading } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandler = useCallback((item) => {
    // 因为点击后携带数据跳转,数据太多,所以不用navigate而是用redux存储数据
    // navigate("/detail")
    dispatch(changeDetailInfoAction(item))

    navigate("/detail")
  }, [dispatch, navigate])

  return (
    <EntireRoomsWrapper>
      <h2>{totalCount}个房源</h2>
      <div className="list">
        {
          roomList?.map(item => {
            return (
              <RoomItem
               itemData={item}
               key={item.id} 
               itemWidth="20%"

               // 把事件从子组件传递出来给父组件,为了使home调用同样的子组件,只有这个(entire-home组件)组件可以触发子组件的事件
               // itemClick是传递给子组件的事件名,itemClickHnadler里面具体事件
               itemClick={itemClickHandler}
               />
            )
          })
        }
      </div>

      {/* 加载时显示遮罩层 */}
      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  )
})


export default EntireRooms
