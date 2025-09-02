import * as actionTypes from './constants'
import { getEntireRoomList } from '@/services/modules/entire'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

// dispatch传来的参数可以放下面的括号中
export const fetchEntireRoomListAction = (currentPage = 0) => {
  //新函数
  return async (dispatch, getState) => {
    // 0. 首先更新当前页码
    dispatch(changeCurrentPageAction(currentPage))

    // 加载时更新loading状态
    dispatch(changeIsLoadingAction(true))
    // 1. 根据页码获取最新的数据
    // const currentPage = getState().entire.currentPage
    const res = await getEntireRoomList(currentPage * 20)

    // 加载结束时更新loading状态
    dispatch(changeIsLoadingAction(false))
    
    // 2. 获取到最新的数据,保存redux到store中
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))


  }
}