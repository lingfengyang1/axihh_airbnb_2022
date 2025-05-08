import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { ListWrapper } from './style'

const RoomList = memo((props) => {
  const {roomList, itemWidth} = props

  return (
    <ListWrapper>
        {
            // 最多展示8条数据
            roomList?.slice(0, 8).map(item => (
                <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}/>
            ))
        }
    </ListWrapper>
  )
})

RoomList.propTypes = {
    roomList: PropTypes.array
}

export default RoomList