import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import { Pagination } from '@mui/material'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { fetchEntireRoomListAction } from '@/store/modules/entire/createActions'

const EntirePagination = memo(function EntirePagination(props) {
  const { totalCount, currentPage } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
  }), shallowEqual)

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1

  //Math.min() 是一个JavaScript内置的数学方法，用来返回给定数字中的最小值。
  //Math.min(1, 3, 2)        // 返回 1
  const endCount = Math.min((currentPage + 1) * 20, totalCount)

  const dispatch = useDispatch()
  // Material-UI内部内置的两个参数, 第一个是事件对象, 第二个是页码值
  function handlePageChange(event, pageNumber) {

    // 点击页码后,滚动到顶部
    window.scrollTo(0, 0)

    dispatch(fetchEntireRoomListAction(pageNumber - 1))
  }

  return (
    <EntirePaginationWrapper>
      <div className="pagination">
        <Pagination 
          count={totalPage} 
          page={currentPage + 1} 
          onChange={handlePageChange} 
          // 修改样式在sx里面
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#000',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
              '&.Mui-selected': {
                backgroundColor: '#000',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#333',
                }
              }
            }
          }}
        />
        
        <span className="desc">
          第{startCount} - {endCount}个房源，共{totalCount}个房源
        </span>
      </div>
    </EntirePaginationWrapper>
  )
})



export default EntirePagination
