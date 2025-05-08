import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const {tabNames = [], tabClick} = props

//   console.log(tabNames)

  const [currentIndex, setCurrentIndex] = useState(0)

  function switchItem(index, name) {
    setCurrentIndex(index)
    tabClick(index, name)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
            tabNames.map((item, index) => (
                <div key={index} className={classNames("item", {"active": currentIndex === index})} onClick={e => switchItem(index, item)}>{item}</div>
            ))
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array
}

export default SectionTabs