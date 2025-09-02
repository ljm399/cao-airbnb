import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPic from './detail-pictures'
import DetailInfo from './detail-infos'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

export default memo(function Detail() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({
      isFixed: false,
      isAlpha: false
    }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPic></DetailPic>
      <DetailInfo></DetailInfo>
    </DetailWrapper>
  )
})
