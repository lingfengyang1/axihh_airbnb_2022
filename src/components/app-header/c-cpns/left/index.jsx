import React, { memo } from 'react'
import "./style"
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

// 爱彼迎网站在处理图片时 都是利用的svg图片而非img 因为svg的图片内容会和其他html一并加载下载并在解析svg时直接渲染 而img的图片内容则需要等到解析到src时才发送请求加载并渲染 这是其一 其二是svg体积往往比img要来的小
const HeaderLeft = memo(() => {
  const navigate = useNavigate()

  function logoClickHandle() {
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClickHandle}>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft