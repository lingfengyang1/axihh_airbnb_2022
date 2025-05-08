import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconLeftArrow from '@/assets/svg/icon_left_arrow'
import IconRightArrow from '@/assets/svg/icon_right_arrow'

// 该组件不仅仅在这个项目中使用得到 在其他项目中也使用的到 因此存放于base-ui目录下
// 该组件的滚动内容不一致 用插槽来进行动态展示 一般会通过props.children拿到当前组件包裹的内容
const ScrollView = memo((props) => {
  // 对于左边按钮是否显示 同样的我们也保存到state中进行管理
  const [showLeft, setShowLeft] = useState(false)

  // 对于右边按钮是否显示 取决于渲染内容的宽度是否大于可视内容的宽度 如果大于的话 那么说明右边还有可滚动区域 应该提供右边按钮来查看被隐藏的右边区域 并且这个判断必须基于页面渲染完成 而且内容一旦发生了更新就需要立马重新判断
  const [showRight, setShowRight] = useState(false)
  const scrollContentRef = useRef()
  // distance变量不应该置于useEffect当中 而是需要抽取到外面 因为clickRightHandle中也会使用到 而且考虑到他的实时更新特性并且他的改变实际上不需要引起页面的重新渲染(界面没有依赖于该数据) 因此的话 不用采取useState的方式来保存数据 而是通过useRef来保存数据
  const distanceRef = useRef()

  useEffect(() => {
    // 计算渲染区域的宽度
    const scrollWidth = scrollContentRef.current.scrollWidth
    // 计算可视区域的宽度
    const clientWidth = scrollContentRef.current.clientWidth
    // 计算二者之差
    distanceRef.current = scrollWidth - clientWidth
    setShowRight(distanceRef.current > 0)
  }, [props.children])

  // 定义一个变量 用于记录每一次滚动最新的首个可视item的索引值 不要用let定义 因为每一次的重新渲染都无法保存上一次的索引值 反而会被重置 而是通过useRef每次返回的都是同一个值的特性 来保存实时更新的索引值
  const itemIndexRef = useRef(0)

//   function clickLeftHandle() {
//     // 点击之后 需要更新索引值
//     const newIndex = itemIndexRef.current - 1
//     // 获取最新元素
//     const newEl = scrollContentRef.current.children[newIndex]
//     // 获取最新元素的偏移量
//     const scrollOffsetLeft = newEl.offsetLeft
//     console.log(scrollOffsetLeft)
//     // 根据偏移量进行水平平移操作 这边的translate平移操作实际上就是根据跳转到指定位移处 而offset偏移量则是相对于祖先定位元素的距离
//     scrollContentRef.current.style.transform = `translate(-${scrollOffsetLeft}px)`

//     // 重置左边按钮/右边按钮的显示/隐藏情况
//     setShowRight(distanceRef.current > scrollOffsetLeft)
//     setShowLeft(scrollOffsetLeft > 0)

//     // 将最新索引值更新到ref中
//     itemIndexRef.current = newIndex
//   }
  
//   function clickRightHandle() {
//     // 点击之后 需要更新索引值
//     const newIndex = itemIndexRef.current + 1
//     // 根据最新的索引值获取最新的元素
//     const newEl = scrollContentRef.current.children[newIndex]
//     // 获取最新元素的偏移量 注意offsetLeft是相对于最近的定位祖先元素进行偏移的
//     const scrollOffsetLeft = newEl.offsetLeft
//     console.log(scrollOffsetLeft)
//     // 根据偏移量进行水平平移操作
//     scrollContentRef.current.style.transform = `translate(-${scrollOffsetLeft}px)`

//     // 当我们发生滚动操作时 需要实时注意右边按钮的显示/隐藏 他的显示/隐藏取决于distance是否大于offsetLeft
//     setShowRight(distanceRef.current > scrollOffsetLeft)
//     // 当我们发生滚动时 除了要注意右边按钮的显示/隐藏以外 也需要注意左边按钮的显示/隐藏 他的判断依据就是offsetLeft是否大于0
//     setShowLeft(scrollOffsetLeft > 0)

//     // 将最新的索引值更新到itemIndexRef中
//     itemIndexRef.current = newIndex
//   }
  // 上述两份代码可以抽取复用
  function clickHandle(isRight = true) {
    // 点击之后 需要更新索引值
    // const newIndex = itemIndexRef.current + 1
    const newIndex = isRight ? itemIndexRef.current + 1 : itemIndexRef.current - 1
    // 根据最新的索引值获取最新的元素
    const newEl = scrollContentRef.current.children[newIndex]
    // 获取最新元素的偏移量 注意offsetLeft是相对于最近的定位祖先元素进行偏移的
    const scrollOffsetLeft = newEl.offsetLeft
    // console.log(scrollOffsetLeft)
    // 根据偏移量进行水平平移操作
    scrollContentRef.current.style.transform = `translate(-${scrollOffsetLeft}px)`
    // console.log(scrollContentRef.current.children[1].offsetLeft)
    // 当我们发生滚动操作时 需要实时注意右边按钮的显示/隐藏 他的显示/隐藏取决于distance是否大于offsetLeft
    setShowRight(distanceRef.current > scrollOffsetLeft)
    // 当我们发生滚动时 除了要注意右边按钮的显示/隐藏以外 也需要注意左边按钮的显示/隐藏 他的判断依据就是offsetLeft是否大于0
    setShowLeft(scrollOffsetLeft > 0)

    // 将最新的索引值更新到itemIndexRef中
    itemIndexRef.current = newIndex
  }

  return (
    <ScrollViewWrapper>
        {
            // showLeft && <button onClick={clickLeftHandle}>左边按钮</button>
            // showLeft && <button onClick={e => clickHandle(false)}>左边按钮</button>
            showLeft && (
                <div className="control left" onClick={e => clickHandle(false)}>
                    <IconLeftArrow/>
                </div>
            )
        }
        {
            // showRight && <button onClick={clickRightHandle}>右边按钮</button>
            // showRight && <button onClick={clickHandle}>右边按钮</button>
            showRight && (
                <div className="control right" onClick={e => clickHandle()}>
                    <IconRightArrow/>
                </div>
            )
        }

        <div className="scroll">
            <div className="scroll-content" ref={scrollContentRef}>
                {
                    props.children
                }
            </div>
        </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView

/**
 * 浏览器渲染DOM的过程：
 * DOM -> layout -> paint -> composite
 * offset这个属性是在layout布局阶段完成计算的 而transform则是基于布局阶段进行的不同绘制(paint阶段)(比如：translate就是基于布局后的界面进行的平移操作 而不是基于前一次的translate绘制界面进行的平移操作)
 * 所以说 不管经历了多少次transform他始终影响的是绘制阶段的界面 而不会影响到布局阶段的offset属性
 */