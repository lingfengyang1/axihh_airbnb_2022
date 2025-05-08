import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import { useNavigate } from 'react-router-dom'

const EntireRooms = memo((props) => {
  const {roomList, totalCount, isLoading} = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }))

  const dispatch = useDispatch()

  const navigate = useNavigate()

  // 由于这个函数需要传递给子组件 可以通过useCallback来进行性能优化
  const itemClick = useCallback(itemData => {
    // 拿到这个数据以后 由于这个数据比较庞大 因此不好通过路由携带参数的方式传递 所以我们仍然将其保存到redux中共享给组件
    dispatch(changeDetailInfoAction(itemData))

    // 跳转到详情页
    navigate("/detail")
  })

  return (
    <RoomsWrapper>
      <h2 className="text">{totalCount}多处住所</h2>
      {/* 不好复用room-list组件的原因在于room-list限制了只能够最多展示8条数据 但是这个组件中的list模块是有多少数据就展示多少数据的 */}
      <div className="room-list">
        {
          roomList?.map(item => (
            // index作为key时很有可能无法完成diff优化 而原本item中的id属性有可能重复破坏唯一性 因此的话 将更加唯一的_id值作为key
            <RoomItem itemData={item} itemWidth="20%" key={item._id} itemClick={itemClick}/>
          ))
        }
      </div>
      {/* 当网络请求加载中时 蒙版存在 加载完毕后撤销蒙版 */}
      {
        isLoading && (
          <div className="cover"/>
        )
      }
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms