import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

// 区域的头部这个组件不仅仅用于home组件 也会用于detail等组件内部 因此的话 不会存放在home组件内部 而是抽取到components目录内部
// rmcp就是在rmc的基础上添加了proptypes类型验证
const SectionHeader = memo((props) => {
  const {title, subtitle} = props

  return (
    <HeaderWrapper>
        <h2 className='title'>{title}</h2>
        {
          subtitle && <div className='subtitle'>{subtitle}</div>
        }
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default SectionHeader