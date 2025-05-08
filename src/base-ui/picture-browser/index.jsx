import PropTypes from 'prop-types'
import React, { memo, useEffect, useState, useRef } from 'react'
import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon_close'
import IconLeftArrow from '@/assets/svg/icon_left_arrow'
import IconRightArrow from '@/assets/svg/icon_right_arrow'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import IconTriangleArrowBottom from '@/assets/svg/icon_triangle_arrow_bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleArrowTop from '@/assets/svg/icon_triangle_arrow_top'

// 如果动画模块出错的话 是因为我们需要为CSSTransition以及里面的子组件添加ref
const PictureBrowser = memo((props) => {
  const {pictureUrls, closeClick} = props 

  // 记录以下当前点击的是左边按钮还是右边按钮 从而决定图片平移动画时是从左边进入还是右边进入
  const [isRight, setIsRight] = useState(true)

  // 保存当前展示图片的索引值
  const [currentIndex, setCurrentIndex] = useState(0)

  // 定义状态用于记录当前显示还是隐藏bottom的list
  const [isShow, setIsShow] = useState(true)

  // 解决动画报错
  const imgRef = useRef()

  // 当图片浏览器渲染以后 就需要停止滚动功能 当该组件卸载后就需要回复滚动功能
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
        // auto表示内容未溢出时不提供滚动功能 当溢出时才提供滚动功能
        document.body.style.overflow = "auto"
    }
  }, [])

  function closeClickHandle() {
    if (closeClick) closeClick()
  }

  function btnClickHandle(isRight = true) {
    let newCurrentIndex = isRight ? currentIndex + 1 : currentIndex - 1
    // 考虑边界情况
    if (newCurrentIndex > pictureUrls.length - 1) newCurrentIndex = 0
    if (newCurrentIndex < 0) newCurrentIndex = pictureUrls.length - 1
    setCurrentIndex(newCurrentIndex)
    setIsRight(isRight)
  }

  function bottomItemClickHandle(index) {
    // 当我们点击的是当前图片左边的图片时 这个图片在展示时需要从左边移入 而不是沿用之前左右按钮点击时所保存的移入方向状态
    setIsRight(index > currentIndex)

    // 接着就是更新最新的图片索引值
    setCurrentIndex(index)
  }

  return (
    <BrowserWrapper isRight={isRight} isShow={isShow}>
      <div className="top">
        <div className="close" onClick={closeClickHandle}>
          <IconClose/>
        </div>
      </div>
      <div className="list">
        <div className="control">
          <div className="btn left" onClick={e => btnClickHandle(false)}>
            <IconLeftArrow width="77" height="77"/>
          </div>
          <div className="btn right" onClick={e => btnClickHandle()}>
            <IconRightArrow width="77" height="77"/>
          </div>
        </div>
        {/* 
          在切换展示图片时 使用轮播组件是不恰当的 因为轮播图比较适用于哪些内容大小固定的场景 对于哪些内容大小不固定的情况来说 使用轮播图会出现滚入滚出的位置和图片之间出现大片空白(为了适应较大图片而将轮播元素设置成大尺寸 从而导致轮播元素包裹图片以外还有盈余空间) 再者轮播组件比较适用于水平滚动(即滚动内容呈水平方向排布或者所有滚动内容都在一个位置堆叠) 但我们的这个场景中包含了水平和垂直方向上的滚动
          我们的处理方案是：同时只在一个位置展示一张图片 通过CSSTransition+SwitchTransition的方式来完成一个图片先进入另一个图片后离开的效果 并且进入会根据左右按钮来决定从左进入还是从右进入并且进入的同时会有透明度的变化 而离开动画只有透明度动画而没有位移动画
          */}
        <div className="picture">
          <SwitchTransition mode='out-in'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
              nodeRef={imgRef}
            >
              <img src={pictureUrls[currentIndex]} ref={imgRef} alt="" />
            </CSSTransition>
          </SwitchTransition>
          {/* <img src={pictureUrls[currentIndex]} alt="" /> */}
        </div>
      </div>
      <div className='indicator'>
        <div className="info">
          <div className="desc">
            <div className="count">{currentIndex + 1}/{pictureUrls.length} room Apartment图片{currentIndex + 1}</div>
            <div className="other" onClick={e => setIsShow(!isShow)}>
              <span>{isShow ? "显示" : "隐藏"}图片列表</span>
              {
                isShow ? <IconTriangleArrowBottom/> : <IconTriangleArrowTop/>
              }
            </div>
          </div>
          <div className="list">
            <Indicator itemIndex={currentIndex}>
              {
                pictureUrls?.map((item, index) => (
                  <div className={classNames("item", {active: currentIndex === index})} key={item} onClick={e => bottomItemClickHandle(index)}>
                    <img src={item} alt="" />
                  </div>
                ))
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser