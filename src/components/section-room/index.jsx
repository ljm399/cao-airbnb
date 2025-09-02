import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionRoomWrapper } from './style'
import RoomItem from '@/components/room-item'

const SectionRoom = memo(function SectionRoom(props) {
  const { roomList = [], itemWidth = "25%" } = props
  return (
    <SectionRoomWrapper>
       <ul>

            {
              // 必须加? 因为第一次list是undefined会报错
              // array.slice(begin, end)
              // 0 是 begin 参数，表示从数组的第一个元素（索引为 0）开始。
              // 8 是 end 参数，表示在索引为 8 的元素之前结束。
              roomList?.slice(0, 8).map((item) => {
                return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />
              }) 
            }
        </ul>
    </SectionRoomWrapper>
  )
})

SectionRoom.propTypes = {
  roomList: PropTypes.array
}

export default SectionRoom
