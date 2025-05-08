import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

// 一般的话 指示器这种组件我们都会专门弄一个测试组件对其进行测试 而不会直接带入到项目中进行测试 所以我们会搞一个和项目无关的Demo组件
// 对于指示器组件来说 里面的内容可以通过插槽动态插入
const Indicator = memo((props) => {
  // 一开始网络请求过程中该数据没有获取到就直接进行下面的offsetLeft等操作 肯定报错 因此的话 需要为其设置默认值
  const {itemIndex = 0} = props

  console.log(itemIndex)

  const listRef = useRef()

  // 除了offset基于layout阶段进行计算以外 clientWidth和scrollWidth也是基于layout阶段计算的而非上一次paint计算
  // 当itemIndex发生改变时 就需要重新计算平移距离
  useEffect(() => {
    // 平移距离的公式=元素.offsetLeft + 元素.width * 0.5 - list.width * 0.5
    // 获取指定索引对应的元素
    const itemEl = listRef.current.children[itemIndex]
    // console.log(itemIndex, itemEl)
    // 计算元素的偏移量
    const itemOffsetLeft = itemEl.offsetLeft 
    // console.log(itemOffsetLeft)
    // 计算元素自身宽度的一半 元素可能不可见 但是scrollWidth计算的是渲染宽度(包括不可见区域)
    const itemWidth = itemEl.scrollWidth
    // console.log(itemWidth)
    // 计算list元素可视区域宽度的一半 即100
    const listWidth = listRef.current.clientWidth
    // console.log(listWidth)
    // 计算list元素渲染区域宽度
    const listScroll = listRef.current.scrollWidth
    // 计算差值
    let distance = itemOffsetLeft + itemWidth * 0.5 - listWidth * 0.5
    const maxDistance = listScroll - listWidth

    // 我们得针对左右边缘的item这种特殊情况的distance进行特殊处理 对于这些元素来讲 他们不需要移动到中间显示 而是仍然停留在边缘显示即可
    // 左边--当distance<0时的这些元素都不需要移动到中间 但是也需要对distance重置为0 因为有可能之前的元素移动到了中间 如果现在元素不需要移动到中间不要直接return 而是需要重置为0在移动到0位置处 否则就会仍然处于上个元素停留在中间的局面
    if (distance < 0) distance = 0
    // 右边--distance能够接收的最大距离就是content本身的scroll-本身的client
    if (distance > maxDistance) distance = maxDistance

    // console.log(distance)
    // 执行平移操作
    listRef.current.style.transform = `translate(${-distance}px)`
  }, [itemIndex])

  return (
    <IndicatorWrapper>
        <div className="list" ref={listRef}>
            {
                props.children
            }
        </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  itemIndex: PropTypes.number
}

export default Indicator