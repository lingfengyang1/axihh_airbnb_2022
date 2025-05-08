import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'

import { ItemWrapper } from './style'
import IconLeftArrow from '@/assets/svg/icon_left_arrow'
import IconRightArrow from '@/assets/svg/icon_right_arrow'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const {itemData, itemWidth, itemClick} = props

  const carouselRef = useRef()

  const [itemIndex, setItemIndex] = useState(0)

  function itemClickHandle() {
    // home组件中的room-item点击时不会跳转 而entire组件中的room-item点击时则会跳转 取决于两个路由组件是否传递函数给子组件room-item
    itemClick && itemClick(itemData)
  }

  function btnClickHandle(isRight = true, event) {
    isRight ? carouselRef.current.next() : carouselRef.current.prev()

    let newItemIndex = isRight ? itemIndex + 1 : itemIndex - 1
    const length = itemData?.picture_urls?.length
    // console.log(length)
    // 考虑边界情况
    if (newItemIndex > (length - 1)) {
      newItemIndex = 0
    }
    if (newItemIndex < 0) {
      newItemIndex = length - 1
    }
    setItemIndex(newItemIndex)

    // 当我们点击了btn以后 事件会进行冒泡从而传递给item 我们需要阻止事件的冒泡行为
    event.stopPropagation()
  }

  const pictureEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const swiperEl = (
    /* 将图片作为轮播图的轮播内容进行滚动 */
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={e => btnClickHandle(false, e)}>
          <IconLeftArrow width="30" height="30"/>
        </div>
        <div className="btn right" onClick={e => btnClickHandle(true, e)}>
          <IconRightArrow width="30" height="30"/>
        </div>
      </div>
      {/* antd中的carousel轮播图组件有几个属性 其中可以通过dots来控制指示器的显示或隐藏、通过autoplay属性来控制是否自动轮播 */}
      {/* <Carousel dots={false} autoplay={true}> */}
      <Carousel dots={false} ref={carouselRef}>
        {
          itemData?.picture_urls?.map(item => (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          ))
        }
      </Carousel>
      {/* 在room-item组件中集成indicator组件 */}
      <div className="indicator">
        <Indicator itemIndex={itemIndex}>
          {
            itemData?.picture_urls?.map((item, index) => (
              <div className="item" key={item}>
                <div className={classNames("dot", {active: itemIndex === index})}/>
              </div>
            ))
          }
        </Indicator>
      </div>
    </div>
  )

  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#666"} itemWidth={itemWidth} onClick={itemClickHandle}>
        <div className="inner">
          
          {/* 由于home组件中展示的room-item中的图片没有轮播的需求 只有entire组件中展示的room-item中的图片才有轮播需求 因此得根据情况来进行不同渲染 */}
          {
            itemData.picture_urls ? swiperEl : pictureEl
          }
          
          <div className="desc">
            {
              itemData.verify_info.messages.join("·")
            }
          </div>
          <div className="name">{itemData.name}</div>
          <div className="price">￥{itemData.price}/晚</div>
          <div className="bottom">
            {/* value控制的是星星的个数、precision控制的是星星的精确度(增量 比如0.5时 星星的可选数量为0、0.5、1等)、sx控制的则是星星的一些自定义属性 ??相比于||来说判断更加严谨 ??会在undefined/null时才继续下一次判断 而||则是在false时就继续下一次判断 而我们的星星个数为0时也需要显示到页面中 */}
            {/* 当我们通过sx自定义属性定义字体大小和颜色等属性时 由于这些属性可继承 因此的话 会被里面的一颗颗星星所继承 但是通过sx自定义margin时该属性不会继承 我们需要单独为每一颗星星设置margin属性才行 */}
            <Rating value={itemData.star_rating ?? '5'} precision={0.1} sx={{fontSize: "12px", color: "green"}}/>
            <span className="count">{itemData.reviews_count}</span>
            {
              // 有些item的bottom_info为空 有些不为空
              itemData.bottom_info && <span>·{itemData.bottom_info.content}</span>
            }
          </div>
        </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem