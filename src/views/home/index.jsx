// import hyRequest from '@/services'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import {Rating} from "@mui/material"
// import { Button } from 'antd';

import HomeBanner from './c-cpns/home-banner'
// import { fetchHomeGoodPriceInfoAction } from '@/store/modules/home'
import { fetchHomeInfoAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
// import SectionHeader from '@/components/section-header'
// import RoomList from '@/components/room-list'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
// import SectionTabs from '@/components/section-tabs'
// import RoomItem from '@/components/room-item'
import { isNotEmptyObject } from './../../utils';
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  // const [highScore, setHighScore] = useState({})

  // // 通过useEffect发送网络请求 保存到当前组件的state中
  // useEffect(() => {
  //   hyRequest.get({url: "/home/highscore"}).then(res => {
  //     // console.log(res)
  //     setHighScore(res)
  //   })
  // }, [])

  // return (
  //   <div>
  //     <h2>{highScore.title}</h2>
  //     <h4>{highScore.subtitle}</h4>
  //     <ul>
  //       {
  //         // 使用可选链保证调用者非空
  //         highScore?.list?.map(item => (
  //           <li key={item.id}>{item.name}</li>
  //         ))
  //       }
  //     </ul>
  //   </div>
  // )

  // dispatch不会因为多次重新渲染而生成新的返回值 相反每一次返回的结果都一致
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(fetchHomeGoodPriceInfoAction())
    dispatch(fetchHomeInfoAction())
    // 每个路由组件都需要决定共享的AppHeader组件的样式 因为他们都共用同一个AppHeader组件实例
    dispatch(changeHeaderConfigAction({isFixed: true, isAlpha: true}))
  }, [dispatch])

  const {goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longforInfo, plusInfo} = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)
  // console.log(discountInfo)

  // const tabNames = discountInfo?.dest_address?.map(item => {
  //   return item.name
  // })

  // // console.log(discountInfo.dest_address, tabNames)

  // const [name, setName] = useState("佛山")
  // // 直接在函数式组件内部定义函数的话 那么每次重新渲染都会重新定义这么一个函数 性能消耗过大 因此的话 可以通过useCallback进行性能优化 没有依赖项时表示任何state改变引起的重新渲染都不会重新定义一个新函数
  // const tabClickHandler = useCallback(function(index, name) {
  //   setName(name)
  // })

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        {/* 实际上 home存在多个可复用的section组件 并且根据一行展示的item个数可以划分成不同版本的section组件 */}
        {/* <div className="goodPrice">
          <SectionHeader title={goodPriceInfo.title}/> */}
          {/* 实际上 我们可以将room-list抽取为一个组件在该项目中的多出地方进行复用 */}
          {/* <ul className='room-list'>
            {
              // 最多展示8条数据
              goodPriceInfo?.list?.slice(0, 8).map(item => (
                <RoomItem itemData={item} key={item.id}/>
              ))
            }
          </ul> */}
          {/* <RoomList roomList={goodPriceInfo.list}/>
        </div>
        <div className="highScore">
          <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}/>
          <RoomList roomList={highScoreInfo.list}/>
        </div> */}
        {/* 由于discount区域和高性价比/高分区域不太一样 不一样的地方在于数据(折扣区域数据会根据城市划分成多个数组 而高性价比等区域则是直接是数组) 再者discount区域还存在一个选项卡区域 */}
        {/* <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/> */}
          {/* 当我们点击sectionTabs中的某个tab时 就会切换index/name 我们就需要动态的根据name来切换roomlist中所展示的数据 */}
          {/* <SectionTabs tabNames={tabNames} tabClick={tabClickHandler}/>
          <RoomList roomList={discountInfo?.dest_list?.[name]} itemWidth="33.33%"/>
        </div> */}

        {/* 对于discountInfo这个模块来说同样的也可以封装为一个组件 和HomeSectionV1不同的版本的组件 并且需要在discountInfo的keys数组保证有元素的情况下方可进行第一次渲染 这样才能够将带有第一个key的初始值作为name的默认值 而且其中我们可以将一个对象长度是否为0的判断抽取为一个工具函数 */}
        {
          // Object.keys(discountInfo).length && <HomeSectionV2 homeInfo={discountInfo}/>
          isNotEmptyObject(discountInfo) && <HomeSectionV2 homeInfo={discountInfo}/>
        }

        {/* 实际上下面两个HomeSectionV1组件也可以在有数据的情况下在进行渲染 否则就会渲染两次徒增性能消耗 */}
        {
          isNotEmptyObject(goodPriceInfo) && <HomeSectionV1 homeInfo={goodPriceInfo}/>
        }

        {
          isNotEmptyObject(longforInfo) && <HomeLongfor homeInfo={longforInfo}/>
        }

        {/* <HomeSectionV1 homeInfo={goodPriceInfo}/> */}
        {
          isNotEmptyObject(highScoreInfo) && <HomeSectionV1 homeInfo={highScoreInfo}/>
        }
        {/* <HomeSectionV1 homeInfo={highScoreInfo}/> */}

        {
          isNotEmptyObject(hotRecommendInfo) && <HomeSectionV2 homeInfo={hotRecommendInfo}/>
        }

        {
          isNotEmptyObject(plusInfo) && <HomeSectionV3 homeInfo={plusInfo}/>
        }
      </div>
      {/* 对mui库中的Rating组件进行测试 */}
      {/* <Rating name="size-small" defaultValue={2} size="small" /> */}
      {/* 对antd库中的Button组件进行测试 */}
      {/* <Button type="primary">Primary Button</Button> */}
    </HomeWrapper>
      
  )
})

export default Home