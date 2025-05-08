import React, { memo, useEffect, useRef, useState } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/left'
import HeaderCenter from './c-cpns/center'
import HeaderRight from './c-cpns/right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { useScrollPosition } from '@/hooks'
import { ThemeProvider } from 'styled-components'

/**
 * 对于header这个头部组件来说 他又可以被划分为左中右三部分 中间部分必须始终保持居中效果 
 * 如若我们采用的方案是左右两部分包裹其内容而中间部分的占据剩余空间的话 那么由于左右两部分的宽度不一致 导致中间部分无法占据整个header的中心 而是中心偏左(右边部分比左边部分的宽度要来得大)
 * 因此的话 我们会选择采用中间部分包裹其内容、而左右两部分则平分剩余空间 这样就会将中间部分往中心位置挤
 * 
 * 对于左中右三部分的逻辑来说 是比较复杂的 因此可以单独封装为三个子组件
 * 
 * 这些组件都有自己的样式 我们通过css in js的styled components实现方案来设置局部样式
 */
const AppHeader = memo(() => {
  const {headerConfig} = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const {isFixed, isAlpha} = headerConfig

  // 通过状态来记录一下header处于搜索还是非搜索状态
  const [isSearch, setIsSearch] = useState(false)

  // 我们需要实时记录一下窗口滚动的位置 由于这个状态界面不依赖 因此的话 我们不需要将其通过useState进行保存 而是通过useRef保存即可
  const prevPosition = useRef(0)

  // 当搜索框未出现时 就需要实时更新一下所记录的滚动位置
  const {scrollY} = useScrollPosition()
  if (!isSearch) prevPosition.current = scrollY
  // 而且一旦搜索框出现以后 不管是向上滚动一定距离还是向下滚动一定距离的话 都是滚动一定距离 其结果都会导致搜索框消除
  if (isSearch && Math.abs(scrollY - prevPosition.current) > 30) setIsSearch(false)

  // 当我们的路由组件支持透明并且是顶部透明时 方可将isAlpha置为true
  // 而且记录的这个顶部透明变量是需要作用于当前及后代的很多组件 因此需要通过主题Provider来后代组件共享该变量
  // 当我们符合顶部透明时 此时展示的应该是搜索框
  const topAlpha = isAlpha && (scrollY === 0)
  console.log(isAlpha, topAlpha)

  return (
    <ThemeProvider theme={{topAlpha}}>
      <HeaderWrapper className={classNames({fixed: isFixed})}>
        <div className="content">
          <div className="top">
            <HeaderLeft/>
            <HeaderCenter isSearch={topAlpha || isSearch} searchBarClick={e => setIsSearch(true)}/>
            <HeaderRight/>
          </div>
          <SearchAreaWrapper isSearch={topAlpha || isSearch}/>
        </div>
        {/* cover这个元素也需要在搜索状态下才可显示 不仅仅只有在点击cover元素时消除搜索框以外 也可以在搜索框出现并滚动一定距离时消除)*/}
        {isSearch && <div className="cover" onClick={e => setIsSearch(false)}/>}
      </HeaderWrapper>
    </ThemeProvider>
    
  )
})

export default AppHeader