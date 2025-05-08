import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchEntireInfoAction } from '@/store/modules/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/modules/main'

// 对于entire组件中的数据 主要包含了三个：列表数据、当前页码、总数据个数 对于这些从后台获取的状态来说 鉴于之前home组件保存到redux的经历 我们也可以将从后台获取的entire相关数据给保存到redux中
const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireInfoAction())
    dispatch(changeHeaderConfigAction({isFixed: true, isAlpha: false}))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire