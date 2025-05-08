import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import RoomList from '@/components/room-list'
import SectionFooter from '@/components/section-footer'
import { isNotEmptyObject } from '@/utils'

const HomeSectionV2 = memo((props) => {
  const {homeInfo} = props

  // console.log(homeInfo.dest_list)

  // 我们需要为name赋一个初始值 对于useState来说 传入的初始值只会在第一次渲染时有效 第二次或者后续多次的渲染时初始值均不会再赋值到redux内部了 而对于网络请求获取到的discountInfo来说 第一次渲染时由于网络请求还未有结果所以是不会将dest_list对象中第一个key作为初始值赋值给name的 只有在第二次重新渲染时初始值才会被第一个key所赋值 此时在想要通过useState赋值给name就无效了
  // 因此的话 我们应该保证dest_list的keys数组长度不为0时才进行第一次渲染 此时就可以保证在第一个key存在的时候进行第一次渲染
  // 实际上也有第二种做法 就是不需要homeInfo的长度不为0时才进行第一次渲染 而是通过useEffect监听homeInfo的改变从而通过setName修改name 但是这种做法渲染次数更多性能损耗更大 还是使用第一种做法为妥
  // 虽说HomeSectionV2的调用者Home组件会在homeInfo数据有值的情况下真正渲染当前组件 但是homeInfo有值并不代表homeInfo.dest_list就有值 因此的话 很有可能出现homeInfo.dest_list为空的情况从而导致Object.keys报错 因此的话 我觉得还需要为当前组件添加useEffect监听dest_list的改变从而引发重新渲染、重新计算name值
  const [name, setName] = useState("")

  // 和第二种做法不同的是他只会渲染当前组件两次 第二种做法是因为useState依赖于homeInfo.dest_list引发的三次渲染(第一次是请求过程中此时依赖值为空 第二次是请求结束此时依赖值已经获取到 第三次则是执行到useEffect时调用setter方法会重新渲染一次)
  // 但现在的做法是useState没有依赖homeInfo 因此只有首次渲染和useEffect这第二次渲染而已
  useEffect(() => {
    // 不要直接homeInfo.dest_list拼接 因为空对象也是true在js中
    isNotEmptyObject(homeInfo.dest_list) && setName(Object.keys(homeInfo.dest_list)[0])
  }, [homeInfo.dest_list])

  const tabNames = homeInfo?.dest_address?.map(item => {
    return item.name
  })

  const tabClickHandle = useCallback(function(index, item) {
    setName(item)
  }, [setName])

  return (
    <SectionV2Wrapper>
        <SectionHeader title={homeInfo.title} subtitle={homeInfo.subtitle}/>
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
        <RoomList roomList={homeInfo?.dest_list?.[name]} itemWidth="33.33%"/>
        <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    homeInfo: PropTypes.object
}

export default HomeSectionV2