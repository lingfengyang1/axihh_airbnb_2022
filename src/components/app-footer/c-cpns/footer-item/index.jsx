import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const FooterItem = memo((props) => {
  const {itemData} = props
  // console.log(itemData)

  return (
    <ItemWrapper>
      <div className="title">{itemData.name}</div>
      <div className="list">
        {
          itemData?.list?.map((item, index) => (
            <div key={index} className='item'>{item}</div>
          )) 
        }
      </div>
    </ItemWrapper>
  )
})

FooterItem.propTypes = {
  itemData: PropTypes.object
}

export default FooterItem