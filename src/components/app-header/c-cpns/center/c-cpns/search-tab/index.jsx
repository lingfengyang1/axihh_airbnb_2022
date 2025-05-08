import searchTitles from "@/assets/data/search_titles.json"
import React, { memo, useState } from 'react'
import { TabWrapper } from './style'
import classNames from 'classnames'

const SearchTab = memo((props) => {
  const {tabClick} = props

  const [currentIndex, setCurrentIndex] = useState(0)

  const titles = searchTitles.map(item => item.title)

  function tabClickHandle(index) {
    setCurrentIndex(index)

    tabClick(index)
  }

  return (
    <TabWrapper>
        <div className="list">
            {
                titles?.map((item, index) => (
                    <div className={classNames("item", {active: currentIndex === index})} key={item} onClick={e => tabClickHandle(index)}>
                        <div className="text">{item}</div>
                        <div className="bottom"/>
                    </div>
                ))
            }
        </div>
    </TabWrapper>
  )
})

SearchTab.propTypes = {}

export default SearchTab