import React, { memo, useEffect, useState } from 'react'
import "./style"
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  const [isShowPanel, setIsShowPanel] = useState(false)

  // 副作用
  useEffect(() => {
    // 当我们点击profile以外的地方 panel都需要被隐藏 而点击profile实现panel的隐藏则在profileClickHandle中就已经实现
    function windowClickHandle() {
      setIsShowPanel(false)
    }

    // 开启事件捕获模式 即将事件从window传递给profile 让点击profile时可以显示面板
    window.addEventListener("click", windowClickHandle, true)

    return () => {
      window.removeEventListener("click", windowClickHandle, true)
    }
  }, [])

  // 点击profile时 面板显示
  function profileClickHandle(e) {
    setIsShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal/>
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconMenu/>
        <IconAvatar/>
        {
          isShowPanel && (
            <div className="panel">
              <div className="top">
                <div className='item'>注册</div>
                <div className="item">登录</div>
              </div>
              <div className="bottom">
                <div className="item">帮助中心</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight