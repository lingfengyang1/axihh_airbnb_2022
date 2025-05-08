import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const {homeInfo} = props

  return (
    <SectionV3Wrapper>
        <SectionHeader title={homeInfo.title} subtitle={homeInfo.subtitle}/>
        <ScrollView>
            {
                homeInfo?.list?.map(item => (<RoomItem itemData={item} key={item._id} itemWidth="20%"/>))
            }
        </ScrollView>
        <SectionFooter/>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
    homeInfo: PropTypes.object
}

export default HomeSectionV3