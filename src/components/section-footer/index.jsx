import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  // 不同组件中的section-footer的内容和样式均有不同 我们可以根据是否传递name来作为不同内容和样式的划分点
  const {name} = props

  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }

  const navigate = useNavigate()
  function moreClickHandle() {
    // 手动跳转到entire组件
    navigate("/entire")
  }

  return (
    <FooterWrapper name={name}>
        <div className="info" onClick={moreClickHandle}>
            <div className="text">{showMessage}</div>
            <IconMoreArrow/>
        </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter