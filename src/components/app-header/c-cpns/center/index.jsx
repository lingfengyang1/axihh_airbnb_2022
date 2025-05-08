import React, { memo, useRef, useState } from 'react'

import searchTitles from "@/assets/data/search_titles.json"
import "./style"
import IconSearchBar from '@/assets/svg/icon_search_bar'
import { CenterWrapper } from './style'
import SearchTab from './c-cpns/search-tab'
import SearchSection from './c-cpns/search-section'
import { PropTypes } from 'prop-types';
import { CSSTransition } from 'react-transition-group'
import { classNames } from 'classnames';

const HeaderCenter = memo((props) => {
  const {isSearch, searchBarClick} = props

  const [itemIndex, setItemIndex] = useState(0)

  const barRef = useRef()
  const detailRef = useRef()

  return (
    // 如果按照下面如此做法的话 那么两个组件之间的切换就显得很生硬 实际上这两个组件在切换的过程中是伴随着多个动画同时进行的 由于是两个组件的动画同时进行 因此不宜使用SwitchTransition这种一个组件内容的进入离开动画 而是使用两个CSSTransition包裹要互相切换的两个组件
    // 但这两个组件一旦都要展示与HeaderCenter中的话 那么由于二者高度之和大于他的和 导致两个组件会相互挤压 因此其中一个组件需要脱离标准流不参与到HeaderCenter组件的高度计算
    // 另外 这两个组件之间切换的动画具体是：search-bar向上移入并缩小 而search-detail则是向下移入并放大 这两个组件会根据in属性是否处于搜索状态而相互切换的
    <CenterWrapper>
      {/* {
        !isSearch ? (
          <div className="search-bar" onClick={searchBarClick}>
            <div className="text">搜索房源和体验</div>
            <div className='icon'>
              <IconSearchBar/>
            </div>
          </div>
        ) : (
          
        )
      } */}
      {/* unmountOnExit主要控制的是当动画结束后组件需要立马卸载 */}
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
        nodeRef={barRef}
      >
        <div className="search-bar" onClick={searchBarClick} ref={barRef}>
          <div className="text">搜索房源和体验</div>
          <div className='icon'>
            <IconSearchBar/>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
        nodeRef={detailRef}
      >
        <div className="search-detail" ref={detailRef}>
          <SearchTab className="search-tab" tabClick={setItemIndex}/>
          <div className="infos">
            <SearchSection className="search-section" searchInfos={searchTitles[itemIndex].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

HeaderCenter.propTypes = {
  isSearch: PropTypes.boolean
}

export default HeaderCenter