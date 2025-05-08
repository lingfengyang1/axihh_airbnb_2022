import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailInfo from './c-cpns/detail-info'
import DetailPicture from './c-cpns/detail-picture'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const dispatch = useDispatch()

  const {detailInfo} = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }))

  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed: false, isAlpha: false}))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPicture detailInfo={detailInfo}/>
      <DetailInfo/>
    </DetailWrapper>
  )
})

export default Detail