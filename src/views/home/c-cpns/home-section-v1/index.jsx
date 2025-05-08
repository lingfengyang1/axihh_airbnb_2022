import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomList from '@/components/room-list'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const {homeInfo} = props

  return (
    <SectionV1Wrapper>
        <SectionHeader title={homeInfo.title} subtitle={homeInfo.subtitle}/>
        <RoomList roomList={homeInfo.list} itemWidth="25%"/>
        <SectionFooter/>
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
    homeInfo: PropTypes.object
}

export default HomeSectionV1