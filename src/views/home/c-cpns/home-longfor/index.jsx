import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongfor = memo((props) => {
  const {homeInfo} = props

  return (
    <LongforWrapper>
      <SectionHeader title={homeInfo.title} subtitle={homeInfo.subtitle}/>
      <div className="longfor-list">
        {/* 当我们用scrollview包裹若干带有图片的longfor-item时 可以发现一个问题 即右侧尚有内容时右边按钮就提前隐藏了 这个问题在coderwhy的代码中也存在 */}
        <ScrollView>
          {
            homeInfo?.list?.map(item => {
              return <LongforItem itemData={item} key={item.city}/>
            })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
    homeInfo: PropTypes.object
}

export default HomeLongfor