import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import filterData from "@/assets/data/filter_data.json"
import { FilterWrapper } from './style'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  // 定义状态用于保存选中的元素 通过useState保存 只要选中元素的数组发生了变化 意味着重新渲染 也意味着保存的state数据发生了改变
  const [selectItems, setSelectItems] = useState([])

  function itemClickHandle(item) {
    // 当我们点击按钮时 可能是触发激活 也可能是取消激活
    // 如果state数组已经拥有item的话 说明说此时为取消操作
    
    // 我们不要直接修改state 比如对于下面的数组来说 如果直接进行push或者splice操作就会导致引用不变 但我们预期的结果是引用改变从而引发重新渲染 因此的话 最正确的做法是浅拷贝后覆盖原数组改变原引用
    const newSelectItems = [...selectItems]
    if (selectItems.includes(item)) {
      // 获取item在选中数组中的位置 而非在所有元素中的位置(即遍历时所传递的位置是错误的)
      const itemIndex = newSelectItems.findIndex(selectItem => selectItem === item)
      newSelectItems.splice(itemIndex, 1)
    } else {
      newSelectItems.push(item)
    }
    setSelectItems(newSelectItems)
  }

  return (
    <FilterWrapper>
      {
        filterData.map(item => (
          <div className={classNames("item", {active: selectItems.includes(item)})} key={item} onClick={e => itemClickHandle(item)}>{item}</div>
        ))
      }
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter