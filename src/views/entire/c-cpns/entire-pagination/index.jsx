import React, { memo } from 'react'
import Pagination from "@mui/material/Pagination"

import { PaginationWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEntireInfoAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo((props) => {
  const {totalCount, currentPage, roomList = []} = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }))

  // console.log(totalCount, currentPage)

  const dispatch = useDispatch()

  const pages = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  // 当点击最新的页码时 会为绑定的事件函数传递事件对象以及最新的页码
  function pageChangeHandle(e, newPage) {
    // 在请求新数据之前 我们需要有一个回到顶部的操作
    window.scrollTo(0, 0)

    // 接着在发送前以及发送过程中需要有一个蒙版遮住room-list区域 但是发送操作保存在store中 因此的话 我们可以将记录蒙版存在与否的变量保存到store中

    // 但如果在一个操作中做了多次dispatch不够好 我们可以将第一次dispatch操作内置于第二次dispatch中

    // 先修改页码 请注意分页器中的页码 = redux中记录的页码 + 1 二者的起始计数不同
    // dispatch(changeCurrentPageAction(newPage - 1))

    // 在请求新的数据
    dispatch(fetchEntireInfoAction(newPage - 1))
  }

  return (
    <PaginationWrapper>
      {/* 当roomList为空时 就不需要展示分页器以及相关文本了 请注意roomList.length为0时虽说分页器不会展示 但是0会被展示出来 我们可以拿0的布尔等价值来代替0因为jsx不会渲染布尔值 */}
      {
        !!roomList.length && (
          <div className="pagination">
            {/* 分页器可以直接采用mui封装好的分页器 只不过有些样式需要调整一下 比如点击时的颜色(颜色调整时不能够直接通过名称或者十六进制修改 而是需要通过定制主题色或者覆盖样式的方式来修改颜色 一般都采用后者)、悬浮时的下划线 */}
            <Pagination count={pages} onChange={pageChangeHandle}/>
            <div className="desc">
              {/* 展示房源序号时 第0页为1 - 20个房源 第1页为21 - 40个房源 所以stateCount为currentPage * 20 + 1 而endCount则为(currentPage + 1) * 20 */}
              第 {startCount} - {endCount} 个房源，共超过 {totalCount} 个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )}
)

EntirePagination.propTypes = {}

export default EntirePagination