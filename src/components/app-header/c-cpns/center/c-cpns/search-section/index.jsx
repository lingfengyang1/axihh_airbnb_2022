import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'

const SearchSection = memo((props) => {
  const {searchInfos} = props

  return (
    <SectionWrapper>
        <div className="content">
          {
            searchInfos?.map(item => (
              <div className="item">
                <div className="city">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>
            ))
          }
        </div>
    </SectionWrapper>
  )
})

SearchSection.propTypes = {}

export default SearchSection